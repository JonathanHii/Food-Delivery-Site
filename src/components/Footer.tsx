import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="h-12 md:h-18 p-4 lg:p-10 xl:p-15 text-blue-500 flex items-center justify-between">
            <Link href="/" className = "font-bold text-xl">FOOOOOD</Link>
            <p>© All Rights Reserved.</p>
        </div>
    )
}

export default Footer