import React from 'react'
import PopularProducts from '../popularproducts/PopularProducts'
import NewProducts from '../newproducts/NewProducts'
import BestSellers from '../bestsellers/BestSellers'

export default function AllProducts() {
  return (
    <>
      <NewProducts />
      <BestSellers />
      <PopularProducts />
    </>
  )
}
