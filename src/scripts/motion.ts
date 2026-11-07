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
      // Return false to swallow a wheel tick (section pager below)
      virtualScroll: (data) => pager(data),
    });

// ── Section pager (Apple-style): one scroll gesture glides to the next section ──
// Sections that fit the viewport are paged; taller ones scroll freely and
// hand over to the next section once their edge is reached.
const PAGE_MS = 1250;
// cubic-bezier(0.28, 0.11, 0.32, 1): the curve apple.com uses for page motion
const pageEase = (() => {
  const [x1, y1, x2, y2] = [0.28, 0.11, 0.32, 1];
  const at = (t: number, a: number, b: number) =>
    3 * (1 - t) ** 2 * t * a + 3 * (1 - t) * t ** 2 * b + t ** 3;
  return (x: number) => {
    let lo = 0;
    let hi = 1;
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      if (at(mid, x1, x2) < x) lo = mid;
      else hi = mid;
    }
    return at((lo + hi) / 2, y1, y2);
  };
})();
const isIndex = () => document.querySelector("main > .hero") !== null;
let paging = false;
let lastWheelTs = 0;
let lastWheelAbs = 0;

const pages = () =>
  [...document.querySelectorAll<HTMLElement>("main section")].filter(
    (s) => !s.parentElement?.closest("section"),
  );

/** Target scroll position for landing on `el`, coming from `dir`. */
function landing(el: HTMLElement, dir: 1 | -1) {
  const vh = window.innerHeight;
  const top = el.getBoundingClientRect().top + window.scrollY;
  const h = el.offsetHeight;
  if (h <= vh * 1.02) return top - (vh - h) / 2; // centre short sections
  return dir === 1 ? top : top + h - vh; // tall: enter at the near edge
}

/** Start a page change from the current section. Returns false when nothing to do. */
function pageStep(dir: 1 | -1): boolean {
  if (!lenis) return false;
  const vh = window.innerHeight;
  const list = pages();
  const mid = vh / 2;
  let i = list.findIndex((s) => {
    const r = s.getBoundingClientRect();
    return r.top <= mid && r.bottom > mid;
  });
  if (i < 0) return false;
  const cur = list[i];
  const r = cur.getBoundingClientRect();
  if (r.height > vh * 1.02) {
    // Tall section: free scroll until its far edge reaches the viewport edge
    const atEdge = dir === 1 ? r.bottom <= vh + 2 : r.top >= -2;
    if (!atEdge) return false;
  } else if (
    // Short section that is mid-way between two pages: settle onto the next
    Math.abs(landing(cur, dir) - window.scrollY) > 2 &&
    ((dir === 1 && landing(cur, dir) > window.scrollY) ||
      (dir === -1 && landing(cur, dir) < window.scrollY))
  ) {
    i -= dir;
  }
  const next = list[i + dir];
  if (!next) return false;
  paging = true;
  const done = () => {
    paging = false;
  };
  lenis.scrollTo(landing(next, dir), {
    duration: PAGE_MS / 1000,
    easing: pageEase,
    force: true,
    onComplete: done,
  });
  window.setTimeout(done, PAGE_MS + 250);
  return true;
}

function pager({
  deltaX,
  deltaY,
  event,
}: {
  deltaX: number;
  deltaY: number;
  event: Event;
}): boolean {
  // Sideways gestures belong to the horizontal lists
  if (Math.abs(deltaX) > Math.abs(deltaY)) return true;
  if (event.type !== "wheel" || !isIndex()) return true;
  if ((event as WheelEvent).ctrlKey) return true;
  const target = event.target as HTMLElement | null;
  if (document.body.classList.contains("drawer-open")) return true;
  if (target?.closest?.(".drawer, .picker-menu")) return true;
  const abs = Math.abs(deltaY);
  if (abs < 2) return true;
  const now = performance.now();
  const sameGesture = now - lastWheelTs < 90 && abs <= lastWheelAbs;
  lastWheelTs = now;
  lastWheelAbs = abs;
  const swallow = () => {
    if (event.cancelable) event.preventDefault();
    return false;
  };
  if (paging) return swallow();
  const dir = deltaY > 0 ? 1 : -1;
  // Trackpad inertia from the previous page change must not trigger another
  if (sameGesture && atPageBoundary(dir)) return swallow();
  return pageStep(dir) ? swallow() : true;
}

/** True when the next wheel tick in `dir` would hand over to another page. */
function atPageBoundary(dir: 1 | -1) {
  const vh = window.innerHeight;
  const cur = pages().find((s) => {
    const r = s.getBoundingClientRect();
    return r.top <= vh / 2 && r.bottom > vh / 2;
  });
  if (!cur) return false;
  const r = cur.getBoundingClientRect();
  if (r.height <= vh * 1.02) return true;
  return dir === 1 ? r.bottom <= vh + 2 : r.top >= -2;
}

// Keyboard paging (arrows / page keys / space / home / end)
window.addEventListener("keydown", (e) => {
  if (!lenis || !isIndex() || e.metaKey || e.ctrlKey || e.altKey) return;
  const t = e.target as HTMLElement;
  if (t.closest("input, textarea, select, button, a, [contenteditable]"))
    return;
  if (document.body.classList.contains("drawer-open")) return;
  const down =
    ["ArrowDown", "PageDown"].includes(e.key) || (e.key === " " && !e.shiftKey);
  const up =
    ["ArrowUp", "PageUp"].includes(e.key) || (e.key === " " && e.shiftKey);
  if (!down && !up) return;
  if (paging) return e.preventDefault();
  if (pageStep(down ? 1 : -1)) e.preventDefault();
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

// Scoped custom properties: setting one on <html> restyles the whole document
// every frame, so each value goes only on the elements that read it.
const progressEls = [
  ...document.querySelectorAll<HTMLElement>(
    ".scroll-progress, .blob-1, .blob-2, #back-to-top",
  ),
];
const sectionFx = [...sections].map((el) => ({
  el,
  fx: el.querySelector<HTMLElement>(":scope > .container"),
  head: el.querySelector<HTMLElement>(":scope > .container > .section-head"),
}));
const touchLike = window.matchMedia("(hover: none)").matches;
let lastProgress = "";
const mainEl = document.querySelector<HTMLElement>("main");

function updateScrollMotion() {
  const vh = window.innerHeight;
  const y = window.scrollY;
  const max = root.scrollHeight - vh;

  // ── reads (one layout pass) ──
  const rects = sectionFx.map(({ el }) => el.getBoundingClientRect());
  const tlRects = [...timelines].map((tl) => tl.getBoundingClientRect());
  const enterRects = [...enters].map((el) => el.getBoundingClientRect());
  const paged = root.classList.contains("paged") && !touchLike;

  // ── writes ──
  const progress = (max > 0 ? clamp(y / max, 0, 1) : 0).toFixed(4);
  if (progress !== lastProgress) {
    lastProgress = progress;
    progressEls.forEach((el) =>
      el.style.setProperty("--scroll-progress", progress),
    );
  }
  if (hero && y < hero.offsetHeight * 1.1) {
    hero.style.setProperty(
      "--hero-p",
      clamp(y / hero.offsetHeight, 0, 1).toFixed(4),
    );
  }
  sectionFx.forEach(({ el, fx, head }, i) => {
    const r = rects[i];
    // Off-screen sections keep their last (clamped) values
    if (r.bottom < -vh * 0.5 || r.top > vh * 1.5) return;
    // -1 (section below viewport centre) … 0 (centred) … 1 (above)
    const p = (vh / 2 - (r.top + r.height / 2)) / vh;
    head?.style.setProperty("--sp", clamp(p, -1.5, 1.5).toFixed(4));
    if (!paged || !fx) return;
    // Page-transition: section recedes on exit and rises into focus on entry
    let pin = clamp(r.top / vh, 0, 1);
    let pout = clamp(1 - r.bottom / vh, 0, 1);
    if (r.height <= vh * 1.02) {
      // Short (centred) sections rest away from the edges: measure from there
      const d = (r.top - (vh - r.height) / 2) / vh;
      pin = clamp(d, 0, 1);
      pout = clamp(-d, 0, 1);
    }
    fx.style.scale = (1 - pin * 0.08 - pout * 0.12).toFixed(4);
    fx.style.translate = `0 ${(pin * 90 - pout * 50).toFixed(1)}px`;
    fx.style.opacity = clamp(1 - pin * 0.85 - pout * 1.1, 0, 1).toFixed(3);
  });
  timelines.forEach((tl, i) => {
    const r = tlRects[i];
    tl.style.setProperty(
      "--line",
      clamp((vh * 0.65 - r.top) / r.height, 0, 1).toFixed(4),
    );
  });
  // 0 when the element's top hits the bottom edge, 1 once it's 60% up
  enters.forEach((el, i) => {
    const r = enterRects[i];
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
  if (isIndex()) root.classList.add("paged");
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
    const lean = root.classList.contains("paged") ? 0 : clamp(v * 0.1, -3, 3);
    const next = skew + (lean - skew) * 0.12;
    if (Math.abs(next - skew) > 0.001 || Math.abs(next) > 0.001) {
      skew = Math.abs(next) < 0.01 ? 0 : next;
      mainEl?.style.setProperty("--skew", `${skew.toFixed(3)}deg`);
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

// ── Drag-to-scroll for the horizontal lists (mouse only; touch scrolls natively) ──
let drag: { el: HTMLElement; x: number; left: number; moved: boolean } | null =
  null;
document.addEventListener("pointerdown", (e) => {
  if (e.pointerType !== "mouse" || e.button !== 0) return;
  const el = (e.target as HTMLElement).closest<HTMLElement>(
    ".paged .grid, .paged .timeline",
  );
  if (el) drag = { el, x: e.clientX, left: el.scrollLeft, moved: false };
});
window.addEventListener("pointermove", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x;
  if (!drag.moved && Math.abs(dx) < 6) return;
  drag.moved = true;
  drag.el.classList.add("dragging");
  drag.el.scrollLeft = drag.left - dx;
});
window.addEventListener("pointerup", () => {
  if (!drag) return;
  const { el, moved } = drag;
  drag = null;
  if (!moved) return;
  // Swallow the click that would follow a drag (cards are links)
  window.addEventListener("click", (c) => c.preventDefault(), {
    capture: true,
    once: true,
  });
  el.classList.remove("dragging");
});
