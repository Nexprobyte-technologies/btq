import { img } from "@/data/site";
import { Eye } from "./icons";

export default function ProductCard({ product }) {
  const { title, price, compareAt, badge, image, hover, colors = [] } = product;

  return (
    <article className="p-card">
      <div className="p-card__media">
        <a href="#" className="p-card__img" aria-label={title}>
          <span className="p-card__slide is-main">
            <img src={img(image, 800)} alt={title} loading="lazy" width="800" height="1066" />
          </span>
          <span className="p-card__slide is-second">
            <img src={img(hover || image, 800)} alt="" loading="lazy" width="800" height="1066" />
          </span>
        </a>

        {badge ? <span className="p-card__badge">{badge}</span> : null}

        <button className="p-card__quick" type="button" aria-label={`Quick view ${title}`}>
          <Eye />
        </button>

        <div className="p-card__swatches">
          <span className="p-card__opt">Color</span>
          <ul>
            {colors.map((c) => (
              <li key={c.name}>
                <a
                  href="#"
                  className="swatch-dot"
                  style={{ "--c": c.color }}
                  data-name={c.name}
                  aria-label={c.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-card__detail">
        <a href="#" className="p-card__title">
          {title}
        </a>
        <div className="p-card__info">
          <div className="price">
            <span>{price}</span>
            {compareAt ? <s>{compareAt}</s> : null}
          </div>
          <button className="btn btn-orange" type="button">
            <span className="dot" />
            <span className="btn-text">Choose options</span>
          </button>
        </div>
      </div>
    </article>
  );
}
