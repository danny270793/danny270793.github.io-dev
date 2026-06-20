import { useState, useEffect } from "preact/hooks";
import "../libraries/arrays";
import type Certification from "../libraries/me/knowledges/certification";
import { translations, type Language } from "../i18n/translations";

export default function Certifications({
  certifications,
  background,
  order,
  parallaxHeight = "30vh",
}) {
  const [category, setCategory] = useState("stared");
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    const nav = navigator.language.split("-")[0] as Language;
    const initial =
      stored && stored in translations
        ? stored
        : nav in translations
          ? nav
          : "en";
    setLang(initial);

    const handler = (e: Event) => setLang((e as CustomEvent<Language>).detail);
    window.addEventListener("i18n:change", handler);
    return () => window.removeEventListener("i18n:change", handler);
  }, []);

  const t = translations[lang];

  const categories = [
    ...new Set(
      certifications
        .map((c: Certification) => c.category)
        .sort((a: string, b: string) => order[a] - order[b]),
    ),
  ];

  const filtered = certifications
    .filter((c: Certification) =>
      category === "all"
        ? true
        : category === "stared"
          ? c.stared
          : c.category === category,
    )
    .sort((a: Certification, b: Certification) => {
      const first = (order[a.category] + 1) * 10 + a.order;
      const second = (order[b.category] + 1) * 10 + b.order;
      return first - second;
    });

  const starredCount = certifications.filter(
    (c: Certification) => c.stared,
  ).length;

  return (
    <>
      <div
        id="certifications"
        class="parallax w3-display-container"
        style={`background-image: url("${background.src}"); min-height: ${parallaxHeight}`}
      >
        <div class="w3-display-middle no-spaces">
          <span class="w3-center w3-padding w3-black w3-xlarge w3-wide w3-animate-opacity">
            {t.sections.certifications}
          </span>
        </div>
      </div>

      <div class="w3-content w3-container w3-padding-64">
        <div class="lib-filter-bar">
          <button
            class={[
              "lib-filter-btn",
              category === "stared" ? "active" : "",
            ].join(" ")}
            onClick={() => setCategory("stared")}
          >
            ★ {t.certifications.starred}
            <span class="lib-filter-count">{starredCount}</span>
          </button>
          <button
            class={["lib-filter-btn", category === "all" ? "active" : ""].join(
              " ",
            )}
            onClick={() => setCategory("all")}
          >
            {t.certifications.all}
            <span class="lib-filter-count">{certifications.length}</span>
          </button>
          {categories.map((cat: string) => (
            <button
              class={[
                "lib-filter-btn",
                category === cat ? "active" : "",
              ].join(" ")}
              onClick={() => setCategory(cat)}
            >
              {cat}
              <span class="lib-filter-count">
                {
                  certifications.filter(
                    (c: Certification) => c.category === cat,
                  ).length
                }
              </span>
            </button>
          ))}
        </div>

        <div class="projects-grid">
          {filtered.map((cert: Certification) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              class="project-card project-card-link"
            >
              <div class="project-card-image">
                <img
                  src={cert.image.src}
                  alt={cert.name}
                  style="width: 64px; height: 64px; object-fit: contain; border-radius: 8px;"
                />
              </div>
              <div class="project-card-body">
                <h5 class="project-card-name">
                  {cert.stared && (
                    <span class="cert-star" title="Starred">★</span>
                  )}
                  {cert.code !== "" ? `(${cert.code}) ${cert.name}` : cert.name}
                </h5>
                <p class="project-card-desc">{cert.brand}</p>
                <div class="cert-card-footer">
                  <span class="library-type-badge">{cert.category}</span>
                  <span class="cert-date">
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
    </>
  );
}
