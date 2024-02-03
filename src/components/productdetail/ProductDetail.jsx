import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import UseFetch from '../UseFetch';
import Img from '../Img';
import { Contexts } from '../../context/ContextApi';
import RelatedProducts from './productrelated/RelatedProducts';
import Rating from '../Rating';

export default function ProductDetail() {
  const { id } = useParams()
  const { handleCartItems,getSaveData, setShowMessage } =  useContext(Contexts)
  const { data } = UseFetch(`/api/products?populate=*&[filters][id]=${id}`)

  return (
    <>
      <div className="bg-[#111827] py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {data?.data?.map((item) => {
              const  CategoryName  = item?.attributes?.categories?.data[0]?.attributes?.title
              const { title, price, color, rating, ratings_num,description } = item?.attributes
              const url  = item?.attributes?.image?.data?.attributes?.url
              const BaseUrl  = import.meta.env.VITE_APP_BASEURLLINK
              const imageUrl = BaseUrl + url
              return (
                <React.Fragment key={item?.id}>
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-lg bg-gray-100">
                      <Img src={imageUrl} alt={title} className="h-full w-full object-cover object-center" />
                      <span className="absolute left-0 top-0 select-none rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
                    </div>
                  </div>
                  <div className="md:py-8">
                    <div className="mb-2 md:mb-3">
                      <span className="mb-0.5 inline-block text-gray-300">{CategoryName}</span>
                      <h2 className="text-2xl font-bold capitalize text-white lg:text-3xl">{title}</h2>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="-ml-1 flex gap-0.5">
                      <Rating rating={rating} />
                      </div>

                      <span className="ml-2 text-sm text-gray-400">{rating}</span>
                      <p className="ml-4 text-xs sm:text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">{ratings_num} ratings</p>
                    </div>
                    <div className="mb-4 md:mb-6">
                      <span className="mb-3 inline-block text-sm font-semibold text-gray-400 md:text-base">Color</span>

                      <div className="flex flex-wrap gap-2">
                        <button type="button" className={`h-8 w-8 rounded-full border ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200`} style={{backgroundColor: color}}></button>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-end gap-2">
                        <span className="text-xl font-bold text-gray-200 md:text-2xl">${price}</span>
                      </div>
                    </div>
                    <div className="mb-6 flex items-center gap-2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokwidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                      </svg>

                      <span className="text-sm text-gray-300">2-4 day shipping</span>
                    </div>
                    <div className="flex gap-2.5">
                      <button onClick={()=>handleCartItems(CategoryName, title, price,imageUrl, item?.id )} className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">Add to cart</button>

                      <button onClick={()=> {getSaveData(CategoryName,title, price,imageUrl, item?.id ),setShowMessage('Items Already Saves')  }} className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokwidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex mb-4  mt-4">
                      <h2 className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1" >Description</h2>
                    </div>
                    <div className="flex mb-4 text-gray-200">
                      <p>{description}</p>
                    </div>
                  </div>

                </React.Fragment>
              )
            }
            )
            }
          </div>
          <RelatedProducts productId={id} categoryId={data?.data[0]?.attributes?.categories?.data[0]?.id}  />
        </div>
      </div>
    </>
  )
}
