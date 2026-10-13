import { img, instagramCards } from "@/data/site";
import { Reveal, Split } from "./Reveal";

function Card({ item, index }) {
  const rotation = index % 2 === 0 ? -2.5 : 2.5;

  return (
    <div className="insta__card" style={{ "--r": `${rotation + (index % 3) * 0.6}deg` }}>
      <img src={img(item.image, 700)} alt={item.product} loading="lazy" />
      <div className="insta__over">
        <span className="insta__handle">@charmique_couture</span>
        <div className="insta__meta">
          <div className="t">{item.product}</div>
          <div className="p">Bespoke Couture Piece</div>
          <span className="insta__view">Enquire Design ↗</span>
        </div>
      </div>
    </div>
  );
}

export default function InstagramGallery() {
  return (
    <section className="section insta scheme-dark">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <div>
            <h2 className="h2">
              <Split lines={["Atelier Diaries on Instagram"]} />
            </h2>
            <p className="section-desc" style={{ margin: "14px auto 0" }}>
              Follow our bridal showcases, saree draping features, and behind-the-scenes
              <br />
              handloom craftsmanship.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="marquee insta__marquee">
        {[0, 1].map((track) => (
          <div className="marquee__track" key={track} style={{ "--dur": "55s", "--gap": "18px" }}>
            {instagramCards.map((item, i) => (
              <Card key={`${item.image}-${i}`} item={item} index={i} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
