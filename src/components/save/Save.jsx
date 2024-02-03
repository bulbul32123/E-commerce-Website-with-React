import React, { useContext, useEffect } from 'react'
import { Contexts } from '../../context/ContextApi'
import Img from '../Img';
import { Link } from 'react-router-dom';
import {AiFillCloseCircle } from 'react-icons/ai'

export default function Save() {
    const { saveProducts, removeItemFromSave } = useContext(Contexts)
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font h-full w-full">
            <h1 className='text-white font-extrabold text-center text-2xl pt-10'>Yours Collections</h1>
                <div className="container px-5 pb-24 pt-10 flex justify-center items-center mx-auto h-full w-full">
                    <div className="flex flex-wrap   -m-4">
                        {saveProducts.length > 0 ? (
                        <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 place-content-center grid-cols-1 gap-10" >
                            {
                                saveProducts.map((item) => (
                                <div className="relative" key={item?.id}>
                                 <span onClick={()=> removeItemFromSave(item?.id)} className='absolute  z-10 text-red-600 hover:scale-125 transition-all du'><AiFillCloseCircle size={25} /></span>
                                    <Link to={`/productdetail/${item.id}`} className="block relative h-48  w-60 rounded overflow-hidden hover-lazy-felix">
                                        <Img alt={item?.title} className="object-cover object-center w-full bg-white h-full block" src={item?.imageUrl
                                        } />
                                    </Link>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item?.CategoryName}</h3>
                                        <h2 className="text-white title-font text-lg font-medium">{(item?.title).slice(0,25) + '...'}</h2>
                                        <p className="mt-1">${item?.price}</p>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                        ) : <div className="flex flex-col justify-center items-center h-full w-full">
                            <Img src='/images/Save.png' className='w-full h-full object-cover mb-5'/>
                            <h3>You do not Save Any Products?</h3>
                        </div>
                        } 
                    </div>
                </div>
            </section>
        </>
    )
}
