import { collectionPanelBridal, collectionPanelFestive, img, panelBackgrounds } from "@/data/site";
import { ArrowDiagonal } from "./icons";
import { Reveal } from "./Reveal";

function Panel({ data, delay, href = "/collections" }) {
  return (
    <Reveal className="panel" delay={delay}>
      <div className="panel__bg">
        <img className="is-base" src={img(panelBackgrounds.base, 1400)} alt="" loading="lazy" />
        <img className="is-hover" src={img(panelBackgrounds.hover, 1400)} alt="" loading="lazy" />
      </div>

      <div className="panel__model">
        <img className="is-base" src={img(data.front, 900)} alt={data.title} loading="lazy" />
        <img className="is-hover" src={img(data.back, 900)} alt="" loading="lazy" />
      </div>

      <div className="panel__content">
        <div className="panel__eyebrow">{data.eyebrow}</div>
        <h3 className="panel__title h2">{data.title}</h3>
        <div className="panel__tags">
          {data.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a href={href} className="btn btn-light btn-arrow">
          <span className="dot" />
          <span className="btn-text">{data.cta}</span>
          <span className="icon-box">
            <ArrowDiagonal />
            <ArrowDiagonal />
          </span>
        </a>
      </div>
    </Reveal>
  );
}

export default function CollectionPanels() {
  return (
    <section className="section scheme-light">
      <div className="container">
        <div className="panels">
          <Panel data={collectionPanelBridal} href="/collections/wedding-edit" />
          <Panel data={collectionPanelFestive} delay={0.12} href="/collections/festive-sarees" />
        </div>
      </div>
    </section>
  );
}
