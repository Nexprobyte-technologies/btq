import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InfoPage } from "@/components/StorePages";
import { notFound } from "next/navigation";
export function generateStaticParams() { return ["about-us","about","contact","privacy-policy","refund-policy"].map((slug) => ({slug})); }
export default async function Page({ params }) { const { slug } = await params; if (slug === "lookbook" || slug === "faq" || slug === "account" || slug === "order-tracking") notFound(); return <><Header/><InfoPage slug={slug}/><Footer/></>; }
