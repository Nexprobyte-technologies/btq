import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPage } from "@/components/StorePages";
export function generateStaticParams() { return ["a-guide-to-easy-layering","the-weekend-knit-edit","finding-your-everyday-uniform"].map((slug) => ({slug})); }
export default async function Page({ params }) { const { slug } = await params; return <><Header/><BlogPage slug={slug}/><Footer/></>; }
