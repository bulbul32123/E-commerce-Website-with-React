import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinks({ setisMenuOpen }) {
    return (
        <>
            <ul onClick={() => setisMenuOpen((prev) => !prev)}>
                <li className="mb-1">
                    <Link to='/category' className="block p-4 text-sm font-semibold text-white hover:bg-gray-700 hover:text-green-500 rounded"  >Categories</Link>
                </li>

                <li className="mb-1">
                    <Link to='/all_products' className="block p-4 text-sm font-semibold text-white hover:bg-gray-700 hover:text-green-500 rounded" >All Products</Link>
                </li>
                <li className="mb-1">
                    <Link to='/contact' className="block p-4 text-sm font-semibold text-white hover:bg-gray-700 hover:text-green-500 rounded">Contact</Link>
                </li>

            </ul>
        </>
    )
}
