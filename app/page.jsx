import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedProductsTabs from "@/components/FeaturedProductsTabs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileCategories from "@/components/MobileCategories";
import ProductRail from "@/components/ProductRail";
import PromoBar from "@/components/PromoBar";
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
          lines={["Handwoven Silks &", "Bridal Masterpieces"]}
          description="Exquisite Kanjivaram pure silk sarees, regal bridal lehengas, and handcrafted festive designer ensembles."
          cta="Explore All Collections"
          products={featuredProducts}
        />

        <FeaturedProductsTabs />
        <PromoBar />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
