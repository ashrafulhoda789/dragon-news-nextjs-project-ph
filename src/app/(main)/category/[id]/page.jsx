import LeftSideBar from "@/components/hompage/news/LeftSideBar";
import RightSideBar from "@/components/hompage/news/RightSideBar";

const getCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();

    return data;
};

const getNewsByCategoryId = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await res.json();

    return data;
}


const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

      const data = await getCategories();
    const categories = data.data.news_category;
    // console.log(categories);

    const newsData = await getNewsByCategoryId(id);
    const news = newsData.data;

    return (
         <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
            <div className="col-span-2">
                <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
            </div>
            <div className="col-span-7">
                <h2 className="font-bold text-lg">All News</h2>
                <div className="space-y-4 mt-5">
                    {
                        news.length > 0 ?
                        news.map(n => {
                            return <div className="rounded-md p-5 border" key={n._id}>
                                {n.title}
                            </div>
                        })
                        :
                        <h2 className="font-bold text-4xl text-center mt-4 dark3">No News Found</h2>
                    }
                </div>
            </div>
            <div className=" col-span-3">
                <RightSideBar></RightSideBar>
            </div>

        </div>
    );
};

export default NewsCategoryPage;