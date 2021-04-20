import React from 'react';
import styles from '../styles/Home.module.css';

const Footer = () => {
    return (
        <div className="relative bg-gray-900 rightbg">
             <div className="relative h-56 bg-indigo-900 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 leftbg">
              <div className="newsletter flex justify-center items-center flex-col">
                <h2 class="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">Want news and updates?</h2>
                  <p class="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">Sign up for our newsletter.</p>
                  <form class="mt-8 sm:flex">
                    <label for="emailAddress" class="sr-only">Email address</label>
                    <input id="emailAddress" name="email" type="email" autocomplete="email" required class="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md" placeholder="Enter your email"/>
                    <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Notify me
                      </button>
                    </div>
                  </form>
              </div>
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                  Get in touch
                </h2>
                <p className="mt-3 text-lg text-gray-300">
                  About Us
                </p>
                <p className="mt-2 text-white tracking-tight">
                  &copy; Copyright 2021 PublicTrades, LLC. All Rights Reserved.
                </p>
                {/* <p className="mt-3 text-lg text-gray-300">
                  Contact
                </p> */}
                <div className="mt-8">
                </div>
              </div>
            </div>
        </div>

    )
}

export default Footer



 