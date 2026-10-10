"use client";

import { useState } from "react";
import Link from "next/link";
import { img } from "@/data/site";

export default function CollectionGrid({ collections }) {
  const [visibleCount, setVisibleCount] = useState(9);
  const visibleCollections = collections.slice(0, visibleCount);
  return <>
    <div className="store-collections">
      {visibleCollections.map((item) => <Link className="store-collection" href={`/collections/${item.slug}`} key={item.slug}>
        <img src={img(item.image, 720)} alt="" />
        <span>{item.label}<b>Explore collection ↗</b></span>
      </Link>)}
    </div>
    {visibleCount < collections.length && <div className="store-view-more-wrap">
      <button className="store-view-more" type="button" onClick={() => setVisibleCount((count) => Math.min(count + 3, collections.length))}>View more</button>
    </div>}
  </>;
}
