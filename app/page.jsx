import CategoriesGrid from "@/components/CategoriesGrid";
import CollectionPanels from "@/components/CollectionPanels";
import FeaturedProduct from "@/components/FeaturedProduct";
import FeaturedProductsTabs from "@/components/FeaturedProductsTabs";
import FloatingText from "@/components/FloatingText";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InstagramGallery from "@/components/InstagramGallery";
import LookbookCarousel from "@/components/LookbookCarousel";
import MobileCategories from "@/components/MobileCategories";
import ProductRail from "@/components/ProductRail";
import PromoBar from "@/components/PromoBar";
import ShopByBrand from "@/components/ShopByBrand";
import ShopTheLook from "@/components/ShopTheLook";
import ShowcaseCollections from "@/components/ShowcaseCollections";
import BackToTop from "@/components/BackToTop";
import { featuredProducts } from "@/data/site";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MobileCategories />
        <CategoriesGrid />

        <ProductRail
          id="fresh-picks"
          lines={["Fresh picks have just", "dropped for you."]}
          description="Thoughtfully selected styles designed for everyday comfort, effortless layering, and timeless appeal."
          cta="View all"
          products={featuredProducts}
        />

        <CollectionPanels />
        <ShowcaseCollections />
        <FeaturedProductsTabs />
        <ShopTheLook />
        <FeaturedProduct />
        <LookbookCarousel />
        <PromoBar />
        <FloatingText />
        <InstagramGallery />
        <ShopByBrand />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
