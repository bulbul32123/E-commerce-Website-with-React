import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              title="map"
              className="absolute inset-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.856639287824!2d90.40487005!3d23.775387000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1705078725125!5m2!1sen!2sbd" width="100%" height="600" style={{ filter: " opacity(0.7)" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a className="text-green-400 leading-relaxed">example@email.com</a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" autoComplete='true' placeholder='Name' id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input type="email"  autoComplete='true' placeholder='Email' id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" placeholder='Message' name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Send</button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
