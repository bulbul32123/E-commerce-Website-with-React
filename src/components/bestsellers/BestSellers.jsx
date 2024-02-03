import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../../apiFetch';
import Products from '../product/Products';

export default function BestSellers() {
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
    <Products title='Best Selling Products' data={data?.slice(18, 25)} />
  )
}
