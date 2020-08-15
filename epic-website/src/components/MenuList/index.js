import React from 'react';

import { HashLink as Link } from 'react-router-hash-link'


const MenuList = () => {
  return (
    <div class="absolute top-0 mt-24 w-screen rounded-md shadow-lg">
    <div class="rounded-md bg-transparent shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <Link smooth to="/#home">
        <div class="py-1">
          <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">01</a>
          <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Home</a>
        </div>
      </Link>
      <div class="border-t opacity-25 border-gray-100"></div>
      <Link smooth to="/#travis">
        <div class="py-1">
          <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">02</a>
          <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">About Us</a>
        </div>
      </Link>
      <div class="border-t opacity-25 border-gray-100"></div>
      <Link smooth to="/#benefits">
      <div class="py-1">
        <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">03</a>
        <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Benefits</a>
      </div>
      </Link>
      <div class="border-t opacity-25 border-gray-100"></div>
      <Link smooth to="/#methology">
      <div class="py-1">
        <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">04</a>
        <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Our methodology</a>
      </div>
      </Link>
      <div class="border-t opacity-25 border-gray-100"></div>
      <Link smooth to="/blog">
      <div class="py-1">
        <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">05</a>
        <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Blog</a>
      </div>
      </Link>
      <div class="border-t opacity-25 border-gray-100"></div>
      <Link smooth to="/#stayInTouch">
      <div class="py-1">
        <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">06</a>
        <a class="inline-block px-4 py-2 text-xl leading-5 text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Contact Us</a>
      </div>
      </Link>
      <div class="border-t opacity-25  border-gray-100"></div>
    </div>
  </div>
  )
}

export default MenuList;