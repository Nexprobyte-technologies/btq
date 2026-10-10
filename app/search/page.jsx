import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SearchPage } from "@/components/StorePages";
export default async function Page({ searchParams }) { const { q = "" } = await searchParams; return <><Header/><SearchPage query={q}/><Footer/></>; }
