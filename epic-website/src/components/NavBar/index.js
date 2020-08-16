import React, { useRef } from 'react';

import FingerPrintSVG from '../../assets/images/fingerprint.svg'

import { HashLink as Link } from 'react-router-hash-link'


const NavBar = (props) => {

  return(
    <nav class="hidden md:flex fixed w-full items-center justify-between  bg-white p-6 z-80">
      <div class="flex flex-col items-center text-white ml-16">
        <span class="font-epicLogo font-bold text-epicTitle text-beBetterBlue md:text-personNameSize z-10 -mt-8 ml-8">epic</span>
        <img class="self-start w-16 -mt-20 z-0" src={FingerPrintSVG} />
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