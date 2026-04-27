import LeftSideBar from "@/components/hompage/news/LeftSideBar";
import Image from "next/image";

const getCategories = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();

    return data;
} 

export default async function Home() {
    const data = await getCategories();
    const categories = data.data.news_category;
    console.log(categories);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
        <div className="col-span-3">
            <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
        </div>
        <div className="font-bold text-3xl bg-red-100 col-span-6">
            All News
        </div>
        <div className="font-bold text-3xl bg-purple-100 col-span-3">
            Social 
        </div>
        
    </div>
  );
}
