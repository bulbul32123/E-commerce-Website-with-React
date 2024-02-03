import React, { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../../apiFetch';
import Products from '../product/Products';

export default function PopularProducts() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    GetProducts()
  }, [])
  const GetProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setdata(res?.data)
    })
  }
  return (
    <Products data={data?.slice(9,17)} title='Popular Products' />
  )
}
