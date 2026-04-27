import LeftSideBar from "@/components/hompage/news/LeftSideBar";
import NewsSideBar from "@/components/hompage/news/NewsSideBar";
import RightSideBar from "@/components/hompage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";


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
                <div className="space-y-5 mt-5">
                    {
                        news.length > 0 ?
                        news.map(n => {
                            return <NewsSideBar key={n._id} news={n}>
                                
                            </NewsSideBar>
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