import React from 'react';
import PagesComponents from './PagesComponents';
import SocialMedias from './SocialMedias';
import FooterComponent from './FooterComponent';
export default function Footer() {
  return (
    <div>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first justify-around">
           <PagesComponents />
           <SocialMedias />
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"> About Us </h2>
              <p>Welcome to SHOPSPHERE, where passion meets fashion! We are more than just an online store; we are a curated marketplace that brings together style, quality, and unbeatable value.</p>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Email</label>
                  <input type="text" id="footer-field" placeholder='Email' name="footer-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-green-900 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="lg:mt-2 xl:mt-0 mt-3 sm:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Send</button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Our Company is the world most best Platform for Ecommerce
              </p>
            </div>
          </div>
        </div>
       <FooterComponent />
      </footer>
    </div>
  )
}
