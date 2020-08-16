import React, { useRef } from 'react';

import Fingerprint from './Fingerprint'

import { HashLink as Link } from 'react-router-hash-link'


const NavBar = (props) => {

  return(
    <nav class="hidden md:flex fixed w-full items-center justify-between bg-white pt-8 z-80">
      <div class="flex flex-col items-center text-white">
        <Link class="-mt-8 ml-8 z-20" to="/#home"><span class="font-epicLogo font-bold text-epicTitle text-beBetterBlue md:text-personNameSize z-10 ml-24">epic</span></Link>
        <Fingerprint />
      </div>
      <div class="w-full block md:flex md:items-center md:w-auto md:mr-16">
        <div class="text-md space-x-8">
          <Link smooth to="/#home">Home</Link>
          <Link smooth to="/#aboutUs">About us</Link>
          <Link smooth to="/#methodology">Our methodology</Link>
          <Link smooth  to="/#stayInTouch">Contact Us</Link>
          <Link smooth to="/#benefits">Benefits</Link>
          <Link smooth to="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;