import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="h-12 text-blue-500 p-4 flex items-center justify-between border-b-2 border-b-blue-500 uppercase">
            {/* LOGO */}
            <div className="text-xl">
                <Link href="/">
                    FOOOOOD
                </Link>
            </div>
            {/* MOBILE MENU */}
            <div>
                <Menu />
            </div>
        </div>
    )
}

export default Navbar