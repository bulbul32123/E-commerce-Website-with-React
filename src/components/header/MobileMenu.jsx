import React from 'react';
import { FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavLinks from './NavLink';
import { useAuth0 } from '@auth0/auth0-react';
import Img from '../Img';

export default function MobileMenu({ isMenuOpen, setisMenuOpen, handlelist, handleProfile, handleSaves ,handleCart, saveProducts, getCartItems }) {
    const { user } = useAuth0();
    return (
        <>
            <div className={`relative z-50   ${isMenuOpen ? 'inline' : 'hidden'} transition-all duration-200`}>
                <div onClick={()=>setisMenuOpen(false)} className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex justify-between flex-col w-5/6 max-w-sm py-6 px-6 bg-gray-800 overflow-y-auto">
                    <div className="flex items-center justify-between mb-8 mr-5">
                        <div onClick={() => setisMenuOpen((prev) => !prev)}>
                            <Link to='/' className="text-lg font-bold text-white leading-none">
                                ShopSphere
                            </Link>
                        </div>
                        <button onClick={() => setisMenuOpen((prev) => !prev)}>
                            <svg className="h-6 w-6 text-gray-200 cursor-pointer hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <NavLinks handlelist={handlelist} setisMenuOpen={setisMenuOpen} />
                    </div>

                    <div className="flex">
                        <div className="pt-3 gap-3">
                            <button onClick={()=>{handleCart(), handleProfile() }} className="relative  md:ml-auto lg:mr-3 py-3 px-4 mr-2 bg-gray-50 hover:bg-gray-100 text-sm text-black font-bold  rounded-xl transition duration-200"><FaShoppingCart size={20} />{
                                <span className='absolute -top-2 right-1 bg-slate-600 text-white px-[4px]  rounded-full'>{
                                    getCartItems.length > 0 ? (
                                        getCartItems.length
                                    ) : ''
                                }</span>
                            }
                            </button>
                        </div>
                        <Link to='/profile' onClick={handleProfile} className="block  mt-3 leading-loose text-xs text-center font-semibold  rounded-xl">{user?.picture ? <Img src={user?.picture} alt={user?.nickname} className='rounded-full h-10 w-10  object-cover object-center mr-2'/> : <FaUserCircle size={35} className='text-white mx-2 mt-1' />}</Link>
                        <button onClick={()=>{handleSaves(), handleProfile() }} className="relative block px-4 py-3 mt-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl"><FaHeart size={20} />
                            <span className='absolute -top-2 right-1 bg-slate-600 text-white px-[6px] text-[10px] rounded-full'>{
                                saveProducts.length > 0 ? (
                                    saveProducts.length
                                ) : ''
                            }</span>
                        </button>
                    </div>
                    <p className="my-4 text-xs text-center text-gray-400">
                        <span>Copyright © 2024</span>
                    </p>
                </nav>
            </div>
        </>
    )
}
