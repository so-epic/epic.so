import React from 'react';


import fingerprintest from '../../assets/images/fingerprintest.png'

import { HashLink as Link } from 'react-router-hash-link'


const NavBar = () => {

  return(
    <nav className="hidden md:flex fixed w-full items-center justify-between bg-white pt-8 z-100">
      <div className="flex flex-col items-center text-white">
        <Link className="-mt-8 ml-8 z-20" to="/#home"><span className="font-epicLogo font-bold text-epicTitle text-beBetterBlue md:text-personNameSize z-10 ml-24">epic</span></Link>
        <img alt="" className="absolute w-24 -mt-16" src={fingerprintest}></img>
      </div>
      <div className="block md:flex flex-no-wrap md:items-center md:w-auto md:mr-16">
        <div className="flex flex-no-wrap text-md space-x-8 text-personDescriptionColor">
          <Link smooth to="/#home">Home</Link>
          <Link smooth to="/#methodology">Our methodology</Link>
          <Link smooth to="/#benefits">Benefits</Link>
          <Link smooth to="/about-us">About us</Link>
          <Link smooth  to="/#stayInTouch">Contact Us</Link>
          <Link smooth to="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;