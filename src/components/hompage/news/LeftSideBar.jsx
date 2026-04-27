import Link from "next/link";


const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="font-bold text-lg ">All Categories</h2>
            <ul className="flex flex-col gap-3 mt-5">
                {
                    categories.map(category => {
                        return <li key={category.category_id}
                            className={`${activeId === category.category_id && 'bg-gray-200 text-gray-900'} p-2 rounded-sm font-semi-bold text-md text-gray-500`}>
                                <Link href={`/category/${category.category_id}`} className="block">
                                {""}
                                {category.category_name}</Link>
                            </li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;