import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '/images/Logo.jpg';
import { FaUserCircle, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Contexts } from '../../context/ContextApi';
import Img from '../Img';
import MobileMenu from './MobileMenu';
import Profile from '../profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
    const { setIsCartOpen, setIsProfileOpen,isProfileOpen, saveProducts, getCartItems } = useContext(Contexts)
    const { isAuthenticated, user } = useAuth0();
    const [visible, setVisible] = useState(false);
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const { setShowToast, setShowMessage } =  useContext(Contexts)
    const navigate  = useNavigate()

    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 20) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    const handleSideBar = () => {
        setisMenuOpen(false)
        setIsCartOpen((prev) => !prev)
    }
    const handleProfile = () => {
        setisMenuOpen(false)
    }
    const handlelist = () => {
        setIsCartOpen((prev) => !prev)
    }

    const handleCart = () => {
        if(isAuthenticated){
            setShowToast(false)
            setIsCartOpen((prev) => !prev)
        }
        else{
            setShowToast(true)
            setShowMessage('Please Log In or Sign in.')
        }
    }
    const handleSaves = () => {
        if(isAuthenticated){
            setShowToast(false)
            navigate('/saves')
        }
        else{
            setShowToast(true)
            setShowMessage('Please Log In or Sign in.')
        }
    }
    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 px-4 py-4 flex text-white bg-[#1a1a1a] z-[50]  transition-all duration-300  ${visible ? 'backdrop-blur-md bg-transparent' : 'bg-transparent'
                }`}>
                <div className="w-full h-full flex justify-between items-center">
                    <Link to='/' className="text-2xl font-bold leading-none">
                        <Img src={Logo} alt="Logo" className='h-10 w-10 rounded-full' />
                    </Link>
                    <div className="md:hidden">
                        <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={() => setisMenuOpen((prev) => !prev)}>
                            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <ul className=" hidden  absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  md:mx-auto md:flex md:items-center md:w-auto md:space-x-6 ">
                    <li>
                        <Link to='/category' className="text-sm hover:text-gray-300" >Categories</Link>
                    </li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li>
                        <Link to='/all_products' className="text-sm hover:text-gray-300" >All Products</Link>
                    </li>
                    <li className="text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li>
                        <Link to='/contact' className="text-sm  hover:text-gray-500">Contact</Link></li>
                </ul>
                <div className="flex items-center relative gap-1">
                    <button onClick={handleCart} className="relative hidden md:inline md:ml-auto lg:mr-3 py-2 px-5 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"><FaShoppingCart size={20} />{
                        <span className='absolute -top-2 right-1 bg-slate-600 text-white px-[4px]  rounded-full'>{
                            getCartItems.length > 0 ? (
                                getCartItems.length
                            ) : ''
                        }</span>
                    }
                    </button>
                    <button  onClick={handleSaves} className="relative hidden md:inline md:ml-auto lg:mr-3 py-2 px-5 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"><FaHeart size={20} />
                        <span className='absolute -top-2 right-1 bg-slate-600 text-white px-[6px] text-[10px] rounded-full'>{
                            saveProducts.length > 0 ? (
                                saveProducts.length
                            ) : ''
                        }</span>
                    </button>
                    <button onClick={() => setIsProfileOpen((prev) => !prev)} className=" hidden md:inline text-sm text-gray-900 font-bold  rounded-xl transition duration-200">{ user?.picture ? <Img src={user?.picture} alt={user?.nickname} className='rounded-full h-10 w-20  object-cover object-center'/> : <FaUserCircle size={25} className='text-white' />}</button>
                    <div className="md:inline hidden">
                    {isProfileOpen && <Profile /> }
                    </div>
                </div>

            </nav>
            <MobileMenu isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} handlelist={handlelist} handleProfile={handleProfile} getCartItems={getCartItems} saveProducts={saveProducts} handleCart={handleCart} handleSaves={handleSaves} />

        </>
    )
}