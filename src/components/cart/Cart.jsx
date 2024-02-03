import React, { useContext } from 'react';
import { Contexts } from '../../context/ContextApi';
import Img from '../Img';

export default function Cart() {
    const { setIsCartOpen, getCartItems, handleRemoveCartItems, handleIncrement, handleDecrement, getTotalPrice } = useContext(Contexts)

    
    const handlePayment = async () => {
      
    };

    return (
        <>
            <div className="relative z-[110] transition-all duration-300" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"/>
                <div className="fixed inset-0 overflow-hidden ">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-10">

                            <div className="pointer-events-auto  w-60 md:w-full">
                                <div className="flex h-full flex-col bg-gray-800 text-white shadow-2xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-white" id="slide-over-title">Shopping cart</h2>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button type="button" className="relative -m-2 p-2 text-gray-200 hover:text-gray-300" onClick={() => setIsCartOpen((prev) => !prev)}>
                                                    <span className="absolute -inset-0.5"></span>
                                                    <span className="sr-only">Close panel</span>
                                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <div className="flow-root ">
                                                <ul role="list" className="-my-6 ">
                                                    {getCartItems.length > 0 ? (
                                                        getCartItems?.map((item) =>
                                                        (
                                                            <li className="flex flex-col  items-center sm:flex-row py-6 px-4 my-5 bg-slate-700 rounded-md" key={item.id}>
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img src={item?.imageUrl} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex flex-col sm:flex-row justify-between text-base font-medium text-white ">
                                                                        <p className="mt-1 sm:hidden  text-xs tracking-widest title-font pl-5 inline mb-2 text-gray-200">{item?.CategoryName}</p>
                                                                            <h3 className='capitalize text-sm mt-1 pl-5 sm:pl-0 sm:mt-0 sm:text-lg'>{item?.title}</h3>
                                                                            <p className="ml-4 mt-2 sm:mt-0">${item?.price}</p>
                                                                        </div>
                                                                        <p className="mt-1 sm:inline hidden text-sm text-gray-200">{item?.CategoryName}</p>
                                                                        <div className="flex items-center border-gray-100 mt-2 mb-2">
                                                                            <span onClick={() => handleDecrement(item?.id)} className="cursor-pointer bg-gray-800 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                                                            <input className="h-8 w-9 border border-gray-600 bg-gray-700 text-center text-xs outline-none" onChange={() => handleInput()} value={getCartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0}
                                                                            />
                                                                            <span onClick={() => handleIncrement(item?.id)} className="cursor-pointer  bg-gray-800 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>

                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-end text-sm">
                                                                        <div className="flex">
                                                                            <button type="button" className="font-medium text-indigo-400 hover:text-indigo-500" onClick={() => handleRemoveCartItems(item?.id)}>Remove</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                        )
                                                    ) : <div className="flex flex-col justify-center items-center h-full w-full text-white">
                                                        <Img src='/images/emptyCart.png' className='w-full h-full object-cover mb-5' />
                                                        <h3>Your Cart is Empty</h3>
                                                    </div>
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t  border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-200">
                                            <p>Subtotal</p>
                                            <p>${getTotalPrice}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-300">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">
                                            <button onClick={handlePayment} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" >Check Out</button>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or
                                                <button onClick={() => setIsCartOpen((prev) => !prev)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
