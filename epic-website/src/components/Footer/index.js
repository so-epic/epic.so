import React from 'react';

import FooterWebBackground from '../../assets/images/Footer.svg'
import FooterMobileBackground from '../../assets/images/Footer-Mobile.svg'
import MenuList from '../MenuList'

import './footer.css'

const Footer = () => {
  return(
    <div class="flex mt-32 justify-center items-center">
      <img class="md:inline hidden w-10/12" src={FooterWebBackground} />
      <img class="md:hidden w-11/12" src={FooterMobileBackground} />
    </div>
  )
}

export default Footer;