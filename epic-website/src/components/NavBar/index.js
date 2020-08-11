import React, { useRef } from 'react';

import FingerPrintSVG from '../../assets/images/fingerprint.svg'


const NavBar = (props) => {

  return(
    <nav class="hidden md:flex fixed w-full items-center justify-between  bg-white z-40 p-6">
      <div class="flex flex-col items-center text-white ml-16">
        <span class="font-epicLogo font-bold text-epicTitle text-beBetterBlue md:text-personNameSize z-10 -mt-8 ml-8">epic</span>
        <img class="self-start w-16 -mt-20 z-0" src={FingerPrintSVG} />
      </div>
      <div class="w-full block md:flex md:items-center md:w-auto md:mr-16">
        <div class="text-md space-x-8">
          <a href="#home" onClick={() => {console.log("paseei")}} class="font-beBetter font-regular text-stayInTouchDescriptionColor block md:inline-block">
            Home
          </a>
          <a href="#responsive-header" class="font-beBetter font-regular text-stayInTouchDescriptionColor block md:inline-block">
            About us
          </a>
          <a href="#responsive-header" class="font-beBetter font-regular text-stayInTouchDescriptionColor block md:inline-block">
            Benefits
          </a>
          <a href="#responsive-header" class="font-beBetter font-regular text-stayInTouchDescriptionColor block md:inline-block">
            Our methodology
          </a>
          <a href="#responsive-header" class="font-beBetter font-regular text-stayInTouchDescriptionColor block md:inline-block">
            Blog
          </a>
          <a href="#responsive-header" class="font-beBetter font-regular text-stayInTouchDescriptionColor block md:inline-block">
            Contact us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;