import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Img from '../Img';
import { Contexts } from '../../context/ContextApi';
import { fetchDataFromApi } from '../../apiFetch';

export default function Categories() {
    const { getCategory, setGetCategory } = useContext(Contexts)
    useEffect(() => {
        GetProducts()
    }, [])
    const GetProducts = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setGetCategory(res?.data)
        })
    }

    return (
        <>
            <div className="bg-[#111827] py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h1 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Categories</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        {getCategory?.map((item) => {
                            const { url } = item?.attributes?.category_img?.data
                                ?.attributes
                            const BaseUrl = import.meta.env.VITE_APP_BASEURLLINK
                            return (
                                <div key={item?.id}>
                                    <Link to={`/products/${item?.id}`} className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-60">
                                        <Img src={BaseUrl + url} alt={item?.attributes?.title} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                        <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-100 backdrop-blur md:px-5 md:text-lg">{item?.attributes?.title}</span>
                                    </Link>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
