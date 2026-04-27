import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;

    const news = await getNewsDetailsById(id);
    console.log(news);
    return (
        <div className='max-w-4xl mx-auto my-10'>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    {/* Author info */}
                    <div className="flex justify-between items-center bg-[#F3F3F3] p-4">
                        <div className="flex gap-2 items-center">
                            <Image src={news.author?.img} alt="new.author?.name" width={40} height={40} className="rounded-full" />
                            <div>
                                <h2 className="font-semibold">{news.author?.name}</h2>
                                <p className="text-xs">{news.author.published_date}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <CiShare2 className="text-xl"></CiShare2>
                            <CiBookmark className="text-xl"></CiBookmark>
                        </div>
                    </div>
                    <h2 className="card-title">{news.title}</h2>
                    <figure>
                        <Image
                            src={news.image_url}
                            alt={news.title} width={300} height={300} className="w-full" />
                    </figure>
                    <p >{news.details}</p>
                    <div className="divider"></div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <p className="flex items-center gap-1"> <IoIosStar className="text-lg text-yellow-500"></IoIosStar> {news.rating.number}</p>
                            <p className="flex items-center gap-1"> <FaEye className="text-lg "></FaEye>{news.total_view}</p>
                        </div>
                        <Link href={`/category/${news.category_id}`}><button className="btn bg-purple-500 text-white">See other news for this category <BsArrowRight></BsArrowRight> </button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsDetailsPage;