import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Img from '../../Img'

export default function ProductCard({ item }) {
    const BaseUrl = import.meta.env.VITE_APP_BASEURLLINK
    const url = item?.attributes?.image?.data?.attributes?.url
    return (
        <div className='mb-9'>
            <Link to={`/productdetail/${item?.id}`} className="group relative mb-2 block h-96 overflow-hidden rounded-lg shadow-lg px-2 lg:mb-3">
                <Img src={BaseUrl + url } loading="lazy" alt={item?.attributes?.title} className="h-96 w-96 object-cover object-center transition duration-200 bg-white rounded-xl group-hover:scale-110 select-none" />
            </Link>

            <div className="flex items-start justify-between px-2">
                <div className="flex flex-col">
                    <h3 className="text-base font-bold text-white transition duration-100  lg:text-lg capitalize">{(item?.attributes?.title).toString().slice(0, 17) + '...'
                    }</h3>
                    <div className="flex gap-1 items-center">
                        <span className="text-gray-300"><BsStarFill /></span>
                        <span className="text-gray-300">{item?.attributes?.rating
                        }</span>
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-200 lg:text-lg">${item?.attributes?.price}</span>
                </div>
            </div>
        </div>
    )
}
