import { useState, useEffect } from "preact/hooks";
import type { Library } from "../libraries/me/knowledges/libraries";
import { translations, type Language } from "../i18n/translations";

export default function Libraries({ libraries, background }) {
  const [type, setType] = useState("all");
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

    const handler = (e: Event) =>
      setLang((e as CustomEvent<Language>).detail);
    window.addEventListener("i18n:change", handler);
    return () => window.removeEventListener("i18n:change", handler);
  }, []);

  const t = translations[lang];

  const types = [...new Set(libraries.map((l: Library) => l.type).sort())];
  const filtered = libraries.filter((l: Library) =>
    type === "all" ? true : l.type === type,
  );

  return (
    <>
      <div
        id="open-source-libraries"
        class="parallax separator w3-display-container"
        style={`background-image: url("${background.src}")`}
      >
        <div class="w3-display-middle no-spaces">
          <span class="w3-center w3-padding w3-black w3-xlarge w3-wide w3-animate-opacity">
            {t.sections.libraries}
          </span>
        </div>
      </div>

      <div class="section-bg-alt">
        <div class="w3-content w3-container w3-padding-64">
          <div class="lib-filter-bar">
            <button
              class={["lib-filter-btn", type === "all" ? "active" : ""].join(" ")}
              onClick={() => setType("all")}
            >
              {t.libraries.all}
              <span class="lib-filter-count">{libraries.length}</span>
            </button>
            {types.map((eachType: string) => (
              <button
                class={["lib-filter-btn", type === eachType ? "active" : ""].join(" ")}
                onClick={() => setType(eachType)}
              >
                {eachType}
                <span class="lib-filter-count">
                  {libraries.filter((l: Library) => l.type === eachType).length}
                </span>
              </button>
            ))}
          </div>

          <div class="projects-grid">
            {filtered.map((library: Library) => (
              <a
                href={library.link}
                target="_blank"
                rel="noopener noreferrer"
                class="project-card project-card-link"
              >
                <div class="project-card-image">
                  <img
                    src={library.image.src}
                    alt={library.name}
                    style="width: 64px; height: 64px; object-fit: contain; border-radius: 12px;"
                  />
                </div>
                <div class="project-card-body">
                  <h5 class="project-card-name">{library.name}</h5>
                  <p class="project-card-desc">{library.description}</p>
                  <span class="library-type-badge">{library.type}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
