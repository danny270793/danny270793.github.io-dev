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

    const handler = (e: Event) =>
      setLang((e as CustomEvent<Language>).detail);
    window.addEventListener("i18n:change", handler);
    return () => window.removeEventListener("i18n:change", handler);
  }, []);

  const t = translations[lang];

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
        <div class="w3-center">
          <div
            class={[
              "w3-bar-item",
              "w3-round",
              "w3-button",
              category === "stared" ? "w3-green" : "",
            ].join(" ")}
            onClick={() => setCategory("stared")}
          >
            <span class="w3-badge w3-red">
              {
                certifications.filter(
                  (certification: Certification) => certification.stared,
                ).length
              }
            </span>{" "}
            {t.certifications.starred}
          </div>
          <div
            class={[
              "w3-bar-item",
              "w3-round",
              "w3-button",
              category === "all" ? "w3-green" : "",
            ].join(" ")}
            onClick={() => setCategory("all")}
          >
            <span class="w3-badge w3-red">{certifications.length}</span>{" "}
            {t.certifications.all}
          </div>
          {[
            ...new Set(
              certifications
                .map((certification: Certification) => certification.category)
                .sort((a: string, b: string) => order[a] - order[b]),
            ),
          ].map((eachCategory: string) => (
            <div
              class={[
                "w3-bar-item",
                "w3-round",
                "w3-button",
                category === eachCategory ? "w3-green" : "",
              ].join(" ")}
              onClick={() => setCategory(eachCategory)}
            >
              <span class="w3-badge w3-red">
                {
                  certifications.filter(
                    (certification: Certification) =>
                      certification.category === eachCategory,
                  ).length
                }
              </span>{" "}
              {eachCategory}
            </div>
          ))}
        </div>
        <br />
        {certifications
          .filter((certification: Certification) =>
            category === "all"
              ? true
              : category === "stared"
                ? certification.stared
                : certification.category === category,
          )
          .sort((a: Certification, b: Certification) => {
            const first = (order[a.category] + 1) * 10 + a.order;
            const second = (order[b.category] + 1) * 10 + b.order;
            return first - second;
          })
          .chunk(3)
          .map((subCertifications: Certification[]) => (
            <>
              {subCertifications.map((certification: Certification) => (
                <div class="w3-row w3-hover-shadow w3-hide-medium w3-hide-large category-item">
                  <a href={certification.link} target="_blank" rel="noopener noreferrer">
                    <div class="w3-col" style="width: 150px;">
                      <img
                        src={certification.image.src}
                        class="w3-padding"
                        alt={certification.name}
                        style="width: 100%; height: auto;"
                      />
                    </div>
                    <div class="w3-rest">
                      <h5>
                        <strong>
                          {certification.code === ""
                            ? certification.name
                            : `(${certification.code}) - ${certification.name}`}
                        </strong>
                      </h5>
                      <p>{certification.brand}</p>
                    </div>
                  </a>
                </div>
              ))}

              <div class="w3-row w3-hide-small">
                {subCertifications.map((certification: Certification) => (
                  <div class="w3-third w3-center w3-padding">
                    <div class="w3-hover-shadow w3-padding">
                      <a href={certification.link} target="_blank" rel="noopener noreferrer">
                        <img
                          src={certification.image.src}
                          class="w3-center"
                          alt={certification.name}
                          style="width: 100%; height: auto;"
                        />
                        <h5>
                          <strong>
                            {certification.code === ""
                              ? certification.name
                              : `(${certification.code}) - ${certification.name}`}
                          </strong>
                        </h5>
                        <p>{certification.brand}</p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
      </div>
    </>
  );
}
