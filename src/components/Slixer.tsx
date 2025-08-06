"use client" //renedered on client side not server
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
    {
        id: 1,
        title: "Craving Food? Get It Delivered, Fast and Fresh.",
        image: "/slide1.png",
    },
    {
        id: 2,
        title: "From Local Favorites to Global Tastes, Delivered Daily.",
        image: "/slide2.png",
    },
    {
        id: 3,
        title: "One Tap Away From Your Next Delicious Meal.",
        image: "/slide3.jpg",
    },
];


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setCurrentSlide(prev => (prev === data.length - 1 ? 0 : prev + 1)),
            2000
        );
        return () => clearInterval(interval);
    }, [])

    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-blue-50'>
            {/* TEXT CONTAINER */}
            <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-blue-500 font-bold lg:h-full lg:w-1/2'>
                <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
                    {data[currentSlide].title}
                </h1>
                <button className='bg-blue-500  text-white py-4 px-8'>Order Now</button>
            </div>

            {/* IMAGE CONTAINER */}
            <div className='w-full h-1/2 relative lg:h-full lg:w-1/2'>
                <Image src={data[currentSlide].image} alt="" fill className='object-cover' />
            </div>
        </div>
    )
}

export default Slider