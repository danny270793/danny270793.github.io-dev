import Lenis from "lenis";

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const root = document.documentElement;

// ── Smooth inertial scrolling ──
export const lenis = reducedMotion
  ? null
  : new Lenis({
      autoRaf: true,
      lerp: 0.09,
      anchors: { offset: -80 },
      prevent: (node) => node.closest(".drawer, .picker-menu") !== null,
    });

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.6 });
  else window.scrollTo({ top: 0 });
}

// ── Scroll reveal (both directions) ──
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      if (entry.intersectionRatio >= 0.12) {
        el.classList.add("visible");
      } else if (!entry.isIntersecting) {
        // Remember which edge it left through so it re-enters from there
        el.dataset.side = entry.boundingClientRect.top < 0 ? "above" : "below";
        el.classList.remove("visible");
      }
    });
  },
  { threshold: [0, 0.12], rootMargin: "0px 0px -40px 0px" },
);
const observed = new WeakSet<Element>();
export const observeReveals = () =>
  document.querySelectorAll(".reveal").forEach((el) => {
    if (observed.has(el)) return;
    observed.add(el);
    revealObserver.observe(el);
  });
observeReveals();
// Islands (filters) render new cards after load
new MutationObserver(observeReveals).observe(document.body, {
  childList: true,
  subtree: true,
});

// ── Animated counters (replay every time they come into view) ──
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix ?? "";
      if (!entry.isIntersecting) {
        el.textContent = `0${suffix}`;
        return;
      }
      const start = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  },
  { threshold: 0.6 },
);
document
  .querySelectorAll("[data-count]")
  .forEach((el) => counterObserver.observe(el));

// ── Scroll-linked motion ──
const hero = document.querySelector<HTMLElement>(".hero");
const sections = document.querySelectorAll<HTMLElement>(".section");
const timelines = document.querySelectorAll<HTMLElement>(".timeline");
const enters = document.querySelectorAll<HTMLElement>("[data-enter]");

function updateScrollMotion() {
  const vh = window.innerHeight;
  const y = window.scrollY;
  const max = root.scrollHeight - vh;
  root.style.setProperty(
    "--scroll-progress",
    (max > 0 ? clamp(y / max, 0, 1) : 0).toFixed(4),
  );
  if (hero) {
    hero.style.setProperty(
      "--hero-p",
      clamp(y / hero.offsetHeight, 0, 1).toFixed(4),
    );
  }
  // -1 (section below viewport centre) … 0 (centred) … 1 (above)
  sections.forEach((s) => {
    const r = s.getBoundingClientRect();
    const p = (vh / 2 - (r.top + r.height / 2)) / vh;
    s.style.setProperty("--sp", clamp(p, -1.5, 1.5).toFixed(4));
  });
  timelines.forEach((tl) => {
    const r = tl.getBoundingClientRect();
    tl.style.setProperty(
      "--line",
      clamp((vh * 0.65 - r.top) / r.height, 0, 1).toFixed(4),
    );
  });
  // 0 when the element's top hits the bottom edge, 1 once it's 60% up
  enters.forEach((el) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty(
      "--enter",
      clamp((vh - r.top) / (vh * 0.6), 0, 1).toFixed(4),
    );
  });
}

// ── Marquee rows: drift continuously, accelerate and reverse with scroll ──
interface Row {
  track: HTMLElement;
  dir: number;
  offset: number;
  loop: number;
}
const rows: Row[] = [...document.querySelectorAll<HTMLElement>(".marquee-row")]
  .map((row) => ({
    track: row.querySelector<HTMLElement>(".marquee-track")!,
    dir: Number(row.dataset.dir ?? 1),
    offset: 0,
    loop: 0,
  }))
  .filter((r) => r.track);
const measureRows = () =>
  rows.forEach((r) => (r.loop = r.track.scrollWidth / 2));
let marqueeVisible = false;
const marquee = document.querySelector(".marquee");
if (marquee) {
  new IntersectionObserver(
    ([e]) => (marqueeVisible = e.isIntersecting),
  ).observe(marquee);
}

if (lenis) {
  let skew = 0;
  lenis.on("scroll", updateScrollMotion);
  window.addEventListener("resize", () => {
    measureRows();
    updateScrollMotion();
  });
  window.addEventListener("load", measureRows);
  measureRows();
  updateScrollMotion();

  const frame = () => {
    const v = lenis.velocity;
    // Content leans into the scroll direction, then settles back
    const next = skew + (clamp(v * 0.1, -3, 3) - skew) * 0.12;
    if (Math.abs(next - skew) > 0.001 || Math.abs(next) > 0.001) {
      skew = Math.abs(next) < 0.01 ? 0 : next;
      root.style.setProperty("--skew", `${skew.toFixed(3)}deg`);
    }
    if (marqueeVisible) {
      rows.forEach((r) => {
        if (!r.loop) return;
        r.offset += (0.6 + v * 0.35) * r.dir;
        const x = ((r.offset % r.loop) + r.loop) % r.loop;
        r.track.style.transform = `translate3d(${-x}px, 0, 0)`;
      });
    }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
