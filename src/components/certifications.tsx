import { useState } from "preact/hooks";
import type Certification from "../libraries/me/knowledges/certification";

export default function Certifications({ certifications, background, order, parallaxHeight = "25vh" }) {
  const [category, setCategory] = useState('all')
  const onCategoryClicked = (selectedCategory: string) => {
    setCategory(selectedCategory)
  }

  return (
    <>
      <div
        id="certifications"
        class="parallax w3-display-container"
        style={`background-image: url("${background.src}"); min-height: ${parallaxHeight}`}
      >
        <div class="w3-display-middle no-spaces">
          <span
            class="w3-center w3-padding w3-black w3-xlarge w3-wide w3-animate-opacity"
          >
            Certifications
          </span>
        </div>
      </div>
      <div class="w3-content w3-container w3-padding-64">
        <div class="w3-center">
          <div
            class={['w3-bar-item', 'w3-round', 'w3-button', category === 'all' ? 'w3-green' : ''].join(' ')}
            onClick={() => onCategoryClicked('all')}
          >
            <span class="w3-badge w3-red">
              {certifications.length}
            </span> All
          </div>
          {
            [
              ...new Set(
                certifications.map(
                  (certification: Certification) => certification.category,
                ).sort((a, b) => order[a] - order[b]),
              ),
            ].map((eachCategory: string) => (
              <div
                class={['w3-bar-item', 'w3-round', 'w3-button', category === eachCategory ? 'w3-green' : ''].join(' ')}
                onClick={() => onCategoryClicked(eachCategory)}
              >
                <span class="w3-badge w3-red">
                  {certifications.filter((e) => e.category === eachCategory).length}
                </span>{" "}
                {eachCategory}
              </div>
            ))
          }
        </div>
        <br />

      </div>
    </>
  )
}
