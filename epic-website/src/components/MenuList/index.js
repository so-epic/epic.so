import React from 'react';

import { HashLink as Link } from 'react-router-hash-link'


const MenuList = () => {
  return (
    <div className="absolute top-0 mt-24 w-screen rounded-md">
      <div className="rounded-md bg-transparent" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <Link smooth to="/#home">
          <div className="py-1">
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">01</p>
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">Home</p>
          </div>
        </Link>
        <div className="border-t opacity-25 border-gray-100"></div>
        <Link smooth to="/#aboutUs">
          <div className="py-1">
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">02</p>
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">About Us</p>
          </div>
        </Link>
        <div className="border-t opacity-25 border-gray-100"></div>
        <Link smooth to="/#benefits">
          <div className="py-1">
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">03</p>
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">Benefits</p>
          </div>
        </Link>
        <div className="border-t opacity-25 border-gray-100"></div>
        <Link smooth to="/#methodology">
          <div className="py-1">
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">04</p>
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">Our methodology</p>
          </div>
        </Link>
        <div className="border-t opacity-25 border-gray-100"></div>
        <Link smooth to="/blog">
          <div className="py-1">
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">05</p>
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">Blog</p>
          </div>
        </Link>
        <div className="border-t opacity-25 border-gray-100"></div>
        <Link smooth to="/#stayInTouch">
          <div className="py-1">
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">06</p>
            <p className="inline-block px-4 py-2 text-xl leading-5 text-white " role="menuitem">Contact Us</p>
          </div>
        </Link>
        <div className="border-t opacity-25  border-gray-100"></div>
      </div>
  </div>
  )
}

export default MenuList;