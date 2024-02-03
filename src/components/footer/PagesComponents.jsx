import React from 'react'
import { Link } from 'react-router-dom'

export default function PagesComponents() {
    return (
        <>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">PAGES </h2>
                <nav className="list-none mb-10">
                    <li>
                        <Link to='/' className="text-gray-400 hover:text-white">Home</Link>
                    </li>
                    <li>
                        <Link to='/category' className="text-gray-400 hover:text-white">Categories</Link>
                    </li>
                    <li>
                        <Link to='/all_products' className="text-gray-400 hover:text-white">All Products</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="text-gray-400 hover:text-white">Contact</Link>
                    </li>
                </nav>
            </div>
        </>
    )
}
