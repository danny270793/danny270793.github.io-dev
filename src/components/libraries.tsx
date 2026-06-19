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
      <div class="w3-content w3-container w3-padding-64">
        <div class="w3-center">
          <div
            class={[
              "w3-bar-item",
              "w3-round",
              "w3-button",
              type === "all" ? "w3-green" : "",
            ].join(" ")}
            onClick={() => setType("all")}
          >
            <span class="w3-badge w3-red">{libraries.length}</span>{" "}
            {t.libraries.all}
          </div>
          {[
            ...new Set(
              libraries.map((library: Library) => library.type).sort(),
            ),
          ].map((eachLibrary: string) => (
            <div
              class={[
                "w3-bar-item",
                "w3-round",
                "w3-button",
                type === eachLibrary ? "w3-green" : "",
              ].join(" ")}
              onClick={() => setType(eachLibrary)}
            >
              <span class="w3-badge w3-red">
                {
                  libraries.filter(
                    (library: Library) => library.type === eachLibrary,
                  ).length
                }
              </span>{" "}
              {eachLibrary}
            </div>
          ))}
        </div>
        <br />

        {libraries
          .filter((library: Library) =>
            type === "all" ? true : library.type === type,
          )
          .chunk(2)
          .map((chunks: Library[]) => (
            <div class="w3-row">
              {chunks.map((library: Library) => (
                <a
                  href={library.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w3-half w3-padding w3-hover-shadow"
                >
                  <div
                    class="w3-row"
                    style="display: flex; align-items: center;"
                  >
                    <div class="w3-col" style="width: 100px;">
                      <img
                        src={library.image.src}
                        class="w3-padding"
                        alt={library.name}
                        style="width: 100px; height: auto;"
                      />
                    </div>
                    <div class="w3-rest">
                      <h5>
                        <strong>{library.name}</strong>
                      </h5>
                      <p>{library.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}
