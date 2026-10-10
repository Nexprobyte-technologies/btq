import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductPage } from "@/components/StorePages";
import { products } from "@/data/site";
export function generateStaticParams() { return products.map(({slug}) => ({slug})); }
export default async function Page({ params }) { const { slug } = await params; return <><Header/><ProductPage slug={slug}/><Footer/></>; }
