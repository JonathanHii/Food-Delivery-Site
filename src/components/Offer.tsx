import Image from 'next/image'
import React from 'react'

const Offer = () => {
    return (
        <div className='bg-black h-screen flex flex-col md:flex-row'>
            {/* TEXT */}
            <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
                <h1 className='text-white text-5xl font-bold xl:text-6xl'>Become a vegan for sure!</h1>
                <p className='text-white xl:text:xl'>I'm a vegan, but I have to admit, I absolutely love the taste of meat. There's just something about the flavor and texture, especially when it comes to burgers. They're so incredibly satisfying and delicious!</p>
                <button className='bg-blue-500 text-white rounded-md py-3 px-6'>Order Now</button>
            </div>
            {/* IMAGE */}
            <div className='relative w-full flex-1'>
                <Image src="/offerProduct.png" alt="" fill className='object-contain' />
            </div>
        </div>
    )
}

export default Offer