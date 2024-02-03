import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import ProductReview from './components/productreview/ProductReview';
import Home from './components/home/Home';
import PageNotFound from './components/PageNotFound';
import ProductDetail from './components/productdetail/ProductDetail';
import Cart from './components/cart/Cart';
import { Contexts } from './context/ContextApi';
import Save from './components/save/Save';
import Footer from './components/footer/Footer';
import Categories from './components/category/Categories';
import AllProducts from './components/allproducts/AllProducts';
import Contact from './components/contact/Contact';
import Profile from './components/profile/Profile';
import Toast from './components/Toast'

export default function App() {
  const { isCartOpen,showToast, showMessage } = useContext(Contexts)
  return (
    <BrowserRouter>
      <Navbar />
      {isCartOpen &&
      <Cart />
      }
     {showToast && <Toast warning={showMessage} />}
      <div className="mt-20">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Categories />} />
        <Route path='/all_products' element={<AllProducts />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products/:id' element={<ProductReview />} />
        <Route path='/saves' element={<Save />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path="*"  element={<PageNotFound />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
