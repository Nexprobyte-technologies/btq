import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CollectionPage } from "@/components/StorePages";
import { collections } from "@/data/site";
export function generateStaticParams() { return [{slug:"all"}, ...collections.map(({slug}) => ({slug}))]; }
export default async function Page({ params }) { const { slug } = await params; return <><Header/><CollectionPage slug={slug}/><Footer/></>; }
