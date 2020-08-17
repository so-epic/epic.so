import React from 'react';

import FooterWebBackground from '../../assets/images/Footer.svg'
import FooterMobileBackground from '../../assets/images/Footer-Mobile.svg'

import './footer.css'

const Footer = () => {
  return(
    <div class="flex mt-32 justify-center items-center">
      <img alt="" class="md:inline hidden md:w-full md:ml-4 lg:ml-0 lg:w-10/12" src={FooterWebBackground} />
      <img alt="" class="md:hidden w-11/12" src={FooterMobileBackground} />
      <h2 class="font-epicLogo font-bold absolute self-start mt-40 z-50 text-4xl text-black md:-ml-32 md:mt-24 md:text-5xl epic-title-div">epic</h2>
    </div>
  )
}

export default Footer;