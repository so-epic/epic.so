import React from 'react';

import FooterWebBackground from '../../assets/images/Footer.svg'

import './footer.css'

function Footer() {
  return(
    <div class="flex justify-center items-center">
      <img class="w-10/12" src={FooterWebBackground} />
    </div>
  )
}

export default Footer;