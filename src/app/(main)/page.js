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
            <h2 className="font-bold text-lg ">All Categories</h2>
            <ul className="flex flex-col gap-3 mt-5">
                {
                    categories.map(category => {
                        return <li key={category.id} className="bg-slate-100 p-2 rounded-md font-bold text-center text-md dark3">{category.category_name}</li>
                    })
                }
            </ul>
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
