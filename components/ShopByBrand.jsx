import { brands } from "@/data/site";
import { Reveal, Split } from "./Reveal";

export default function ShopByBrand() {
  return (
    <section className="section scheme-dark" style={{ paddingBottom: 0 }}>
      <div className="container">
        <Reveal className="section-head">
          <h2 className="h5" style={{ color: "#fff" }}>
            <Split lines={["Shop By Brand"]} />
          </h2>
        </Reveal>
      </div>

      <div className="brands">
        <div className="container">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={Math.min(i, 5) * 0.05}>
              <a className="brand-item" href="#">
                <span className="brand-item__name">{brand.name}</span>
                <span className="brand-item__meta">
                  <span>{brand.tag}</span>
                  <span className="count">{brand.count}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
