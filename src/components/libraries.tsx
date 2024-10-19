import { useState } from "preact/hooks";
import type { Library } from "../libraries/me/knowledges/libraries";

export default function Libraries({
  libraries,
  background,
}) {
  const [type, setType] = useState("all");
  const onTypeClicked = (selectedType: string) => {
    setType(selectedType);
  };

  return (
    <>
      <div
        id="open-source-libraries"
        class="parallax separator w3-display-container"
        style={`background-image: url("${background.src}")`}
      >
        <div class="w3-display-middle no-spaces">
          <span
            class="w3-center w3-padding w3-black w3-xlarge w3-wide w3-animate-opacity"
          >
            Open Source Libraries
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
            onClick={() => onTypeClicked("all")}
          >
            <span class="w3-badge w3-red">{libraries.length}</span> All
          </div>
          {[
            ...new Set(
              libraries
                .map((library: Library) => library.type)
                .sort(),
            ),
          ].map((eachLibrary: string) => (
            <div
              class={[
                "w3-bar-item",
                "w3-round",
                "w3-button",
                type === eachLibrary ? "w3-green" : "",
              ].join(" ")}
              onClick={() => onTypeClicked(eachLibrary)}
            >
              <span class="w3-badge w3-red">
                {
                  libraries.filter(
                    (library: Library) =>
                      library.type === eachLibrary,
                  ).length
                }
              </span>{" "}
              {eachLibrary}
            </div>
          ))}
        </div>
        <br />

        {
          libraries.filter((library: Library) =>
            type === "all" ? true : library.type === type,
          ).chunk(2).map((chunks: Library[]) => (
            <div class="w3-row">
              {
                chunks.map((library: Library) => (
                  <a
                    href={library.link}
                    target="_blank"
                    class="w3-half w3-padding w3-hover-shadow"
                  >
                    <div class="w3-row" style="display: flex; align-items: center;">
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
                ))
              }
            </div>
          ))
        }
      </div>
    </>
  )
}
