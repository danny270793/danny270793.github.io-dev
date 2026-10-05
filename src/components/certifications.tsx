import { useState } from "preact/hooks";
import { translations } from "../i18n/translations";
import { useLang } from "./use-lang";

interface CertProp {
  stared?: boolean;
  code: string;
  name: string;
  brand: string;
  link: string;
  date: string;
  order: number;
  category: string;
  imageSrc: string;
}

interface Props {
  certifications: CertProp[];
  order: Record<string, number>;
}

export default function Certifications({ certifications, order }: Props) {
  const [category, setCategory] = useState("stared");
  const lang = useLang();
  const t = translations[lang];

  const categories = [
    ...new Set(
      certifications.map((c) => c.category).sort((a, b) => order[a] - order[b]),
    ),
  ];

  const filtered = certifications
    .filter((c) =>
      category === "all"
        ? true
        : category === "stared"
          ? c.stared
          : c.category === category,
    )
    .sort(
      (a, b) =>
        (order[a.category] + 1) * 10 +
        a.order -
        ((order[b.category] + 1) * 10 + b.order),
    );

  const filters = [
    {
      id: "stared",
      label: `★ ${t.certifications.starred}`,
      count: certifications.filter((c) => c.stared).length,
    },
    { id: "all", label: t.certifications.all, count: certifications.length },
    ...categories.map((cat) => ({
      id: cat,
      label: cat,
      count: certifications.filter((c) => c.category === cat).length,
    })),
  ];

  return (
    <section id="certifications" class="section">
      <div class="container">
        <div class="section-head reveal reveal-blur">
          <span class="section-label">{t.sections.certifications}</span>
          <h2 class="section-title">{t.headings.certifications}</h2>
          <p class="section-sub">{t.subs.certifications}</p>
        </div>

        <div class="filters reveal" style={{ "--delay": "0.1s" }}>
          {filters.map((f) => (
            <button
              type="button"
              class={`filter-btn${category === f.id ? " active" : ""}`}
              onClick={() => setCategory(f.id)}
            >
              {f.label}
              <span class="filter-count">{f.count}</span>
            </button>
          ))}
        </div>

        <div class="grid" key={category}>
          {filtered.map((cert, i) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              class="card card-interactive item-card reveal reveal-tilt"
              style={{ "--delay": `${(i % 3) * 0.08}s` }}
            >
              <i class="fas fa-external-link-alt card-arrow" />
              <div class="item-logo">
                <img src={cert.imageSrc} alt={cert.name} loading="lazy" />
              </div>
              <div class="item-body">
                <h3 class="item-title">
                  {cert.stared && <span class="star">★</span>}
                  {cert.name}
                </h3>
                <p class="item-desc">
                  {cert.brand}
                  {cert.code !== "" && ` · ${cert.code}`}
                </p>
                <div class="item-meta">
                  <span class="tag">{cert.category}</span>
                  <span class="meta-faint">
                    {new Date(cert.date).toLocaleDateString(
                      lang === "es" ? "es-ES" : "en-US",
                      { year: "numeric", month: "short" },
                    )}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
