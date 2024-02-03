import React from 'react';
import { useParams } from 'react-router-dom';
import UseFetch from '../UseFetch';
import ProductCard from '../productdetail/productCard/ProductCard';

export default function ProductReview() {
  const { id } = useParams();
  const { data } = UseFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
  const title = data?.data[0]?.attributes?.categories?.data[0]?.attributes?.title
  return (
    <>
      <div className="bg-[#111827] text-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-white md:text-4xl uppercase">{title}</h2>
          </div>
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {data?.data?.map((item) => {
              return (
                <ProductCard item={item} key={item?.id} />
              )
            })
            }
          </div>
        </div>
      </div>
    </>
  )
}
