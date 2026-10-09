import { categoriesGrid, img } from "@/data/site";
import { ArrowDiagonal } from "./icons";
import { Reveal, Split } from "./Reveal";

export default function CategoriesGrid() {
  return (
    <section className="section scheme-white">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <h2 className="h3">
              <Split lines={["Discover Signature Collections"]} />
            </h2>
          </div>
          <a href="#" className="btn btn-dark">
            <span className="dot" />
            <span className="btn-text">Explore All Collections</span>
          </a>
        </Reveal>

        <div className="cats-grid">
          {categoriesGrid.map((cat, i) => (
            <Reveal key={cat.label} delay={(i % 5) * 0.06}>
              <a href="#" className="cat-card">
                <img src={img(cat.image, 700)} alt={cat.label} loading="lazy" />
                <span>{cat.label}</span>
                <i>
                  <ArrowDiagonal size={14} />
                </i>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
