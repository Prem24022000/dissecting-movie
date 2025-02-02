import { notFound } from "next/navigation";
import { Hero } from "./components/sections";

async function fetchBlogData(slug) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blog-data`);
  const innerData = await data.json();
  return innerData.filter((item) => item.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const filterData = await fetchBlogData(slug);
  return {
    title: filterData[0].meta.title,
    description: filterData[0].meta.description,
  };
}

export default async function Blog({ params }) {
  const { slug } = await params;
  const filterData = await fetchBlogData(slug);

  if (filterData.length === 0) {
    notFound();
  }

  return (
    <div className="font-sans">
      <Hero innerData={filterData[0]} />
    </div>
  );
}
