import { useState } from "preact/hooks";
import "../libraries/arrays";
import type Certification from "../libraries/me/knowledges/certification";

export default function Certifications({
  certifications,
  background,
  order,
  parallaxHeight = "25vh",
}) {
  const [category, setCategory] = useState("all");
  const onCategoryClicked = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <div
        id="certifications"
        class="parallax w3-display-container"
        style={`background-image: url("${background.src}"); min-height: ${parallaxHeight}`}
      >
        <div class="w3-display-middle no-spaces">
          <span class="w3-center w3-padding w3-black w3-xlarge w3-wide w3-animate-opacity">
            Certifications
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
              category === "all" ? "w3-green" : "",
            ].join(" ")}
            onClick={() => onCategoryClicked("all")}
          >
            <span class="w3-badge w3-red">{certifications.length}</span> All
          </div>
          {[
            ...new Set(
              certifications
                .map((certification: Certification) => certification.category)
                .sort((a, b) => order[a] - order[b]),
            ),
          ].map((eachCategory: string) => (
            <div
              class={[
                "w3-bar-item",
                "w3-round",
                "w3-button",
                category === eachCategory ? "w3-green" : "",
              ].join(" ")}
              onClick={() => onCategoryClicked(eachCategory)}
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
            category === "all" ? true : certification.category === category,
          )
          .sort((a: Certification, b: Certification) => {
            const first = (order[a.category] + 1) * 10 + a.order;
            const second = (order[b.category] + 1) * 10 + b.order;
            const result = first - second;

            return result;
          })
          .chunk(3)
          .map((subCertifications: Certification[]) => (
            <>
              {subCertifications.map((certification: Certification) => (
                <div class="w3-row w3-hover-shadow w3-hide-medium w3-hide-large category-item">
                  <a href={certification.link} target="_blank">
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
                      <a href={certification.link} target="_blank">
                        <img
                          src={certification.image.src}
                          class="w3-center"
                          alt={certification.name}
                          style="width: 100%; height: auto;"
                        />
                        {(order[certification.category] + 1) * 10 +
                          certification.order}
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
