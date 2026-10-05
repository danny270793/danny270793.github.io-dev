import { useState } from "preact/hooks";
import type { Library } from "../libraries/me/knowledges/libraries";
import { translations } from "../i18n/translations";
import { useLang } from "./use-lang";

const TYPE_ICON: Record<string, string> = {
  Node: "fab fa-node-js",
  Python: "fab fa-python",
  DockerHub: "fab fa-docker",
  Arduino: "fas fa-microchip",
  Rust: "fas fa-cog",
  Flutter: "fas fa-mobile-alt",
  Matlab: "fas fa-square-root-alt",
};

export default function Libraries({ libraries }: { libraries: Library[] }) {
  const [type, setType] = useState("all");
  const lang = useLang();
  const t = translations[lang];

  const types = [...new Set(libraries.map((l) => l.type).sort())];
  const filtered = libraries.filter((l) => type === "all" || l.type === type);

  return (
    <section id="open-source-libraries" class="section">
      <div class="container">
        <div class="section-head reveal reveal-blur">
          <span class="section-label">{t.sections.libraries}</span>
          <h2 class="section-title">{t.headings.libraries}</h2>
          <p class="section-sub">{t.subs.libraries}</p>
        </div>

        <div class="filters reveal" style={{ "--delay": "0.1s" }}>
          <button
            type="button"
            class={`filter-btn${type === "all" ? " active" : ""}`}
            onClick={() => setType("all")}
          >
            {t.libraries.all}
            <span class="filter-count">{libraries.length}</span>
          </button>
          {types.map((each) => (
            <button
              type="button"
              class={`filter-btn${type === each ? " active" : ""}`}
              onClick={() => setType(each)}
            >
              <i class={TYPE_ICON[each] ?? "fas fa-box-open"} />
              {each}
              <span class="filter-count">
                {libraries.filter((l) => l.type === each).length}
              </span>
            </button>
          ))}
        </div>

        <div class="grid" key={type}>
          {filtered.map((library, i) => (
            <a
              href={library.link}
              target="_blank"
              rel="noopener noreferrer"
              class="card card-interactive item-card reveal reveal-scale"
              style={{ "--delay": `${(i % 3) * 0.08}s` }}
            >
              <i class="fas fa-external-link-alt card-arrow" />
              <div class="item-logo">
                <img
                  src={library.image.src}
                  alt={library.type}
                  loading="lazy"
                />
              </div>
              <div class="item-body">
                <h3 class="item-title">{library.name}</h3>
                <p class="item-desc">{library.description[lang]}</p>
                <div class="item-meta">
                  <span class="tag">
                    <i class={TYPE_ICON[library.type] ?? "fas fa-box-open"} />
                    {library.type}
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
