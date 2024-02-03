import React from 'react';
import Contact from '../contact/Contact';
import Testimonials from '../testimonials/Testimonials';
import Categories from '../category/Categories';
import PopularProducts from '../popularproducts/PopularProducts';
import BestSellers from '../bestsellers/BestSellers';
import Hero from './Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <PopularProducts />
      <BestSellers />
      <Testimonials />
      <Contact />
    </div>
  )
}
