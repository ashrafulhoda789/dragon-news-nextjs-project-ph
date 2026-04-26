import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-6'>
            <h2 className='font-bold text-5xl'>This page is not found.</h2>
            <p className='dark3 font-bold text-xl'>Back to home page</p>
            <Link href={'/'}>
                <button className='btn btn-primary'>Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;