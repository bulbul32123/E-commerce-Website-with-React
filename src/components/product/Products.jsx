import React from 'react';
import ProductCard from '../productdetail/productCard/ProductCard';

export default function Products({ data, title }) {
  return (
    <div className='h-full w-full bg-[#111827]' >
      <div className="flex justify-center items-center h-full w-full mb-10">
        <h2 className=' text-2xl font-bold text-white mt-16'>{title}</h2>
      </div>
      <div className="grid gap-x-4 gap-y-8 pl-5 pr-5 md:pl-10 md:pr-10 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((item) => {
          return(
          <ProductCard item={item} key={item?.id} />
          )
        })
        }
      </div>
    </div>
  )
}