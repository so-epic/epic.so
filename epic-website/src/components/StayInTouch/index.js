import React from 'react';

import FingerprintSVG from '../../assets/images/fingerprint-stayintouch.svg'
import FingerprintSVG2 from '../../assets/images/fingerprint-stayintouch2.svg'
import FingerprintSVG3 from '../../assets/images/fingerprint-stayintouch3.svg'
import BlueDecorations from '../../assets/images/bluedecorations.svg'
import WhiteDecorations from '../../assets/images/whitedecorations.svg'
import Line from '../../assets/images/get-in-touch-line.svg'


import { HashLink as Link } from 'react-router-hash-link'

const StayInTouch = () => {
  return(
    <div id="stayInTouch" className="flex flex-col items-center h-full mt-32 space-y-16">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="font-beBetter font-bold text-beBetterBlue text-epicTitle tracking-wider">Stay in touch</h1>

      </div>

      <img alt="" className="absolute hidden md:inline self-end right-0 mt-24" src={FingerprintSVG} />
      <img alt="" className="absolute hidden md:inline self-end right-0 mt-24" src={FingerprintSVG2} />
      <img alt="" className="absolute hidden md:inline self-end right-0 mt-24" src={FingerprintSVG3} />
      <img alt="" className="absolute hidden md:inline self-start" src={Line} />

      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 ">
        <div className="flex flex-col h-70 w-112 items-center bg-stayInTouchBlue rounded-xlg md:w-124">
          <img alt="" className="absolute hidden md:inline self-start" src={BlueDecorations} />
          <h2 className="self-end mt-16 md:mt-24 font-beBetter font-medium text-white text-methodologyTitleSize mr-4">Epic Newsletter</h2>
          <p className="self-end font-beBetter font-light text-white text-contactFontSize mr-4 mt-4">Learn new strategies for customer <br/>Acquisition and Retention, and<br/>Epic Labs news.</p>
          <button className="font-beBetter font-semibold text-white text-contactFontSize mt-32 z-75"><a target="_blank" rel="noopener noreferrer" href="https://epic.substack.com/subscribe?utm_source=website" >Join newsletter</a></button>
        </div>

        <div className="flex flex-col h-70 w-112 items-center bg-white border-2 border-epicBlue rounded-xlg md:w-124">
          <img alt="" className="absolute hidden md:inline self-end" src={WhiteDecorations} />
          <h2 className="self-start ml-4 mt-24 font-beBetter font-medium text-beBetterBlue text-methodologyTitleSize mr-4">Epic Blog</h2>
          <p className="self-start font-beBetter font-light text-beBetterBlue text-contactFontSize ml-4 mt-8 md:mt-4 ">Our most recent content about<br/>customer Acquisition and Retention <br/>strategy.</p>
          <Link className="z-75" to="/blog">
            <button className="mt-16 font-beBetter font-semibold text-beBetterBlue text-contactFontSize md:mt-24">Open blog</button>
            <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="90" height="26.01" viewBox="-30 0 90 26.01"><defs></defs><g transform="translate(0.751 0.75)">
              <path className="a" d="M10,4.51H2.44A2.44,2.44,0,0,0,0,7V22.07a2.44,2.44,0,0,0,2.44,2.44H17.56A2.44,2.44,0,0,0,20,22.07V14.51H19v7.56a1.45,1.45,0,0,1-1.44,1.44H2.44A1.45,1.45,0,0,1,1,22.07V7A1.45,1.45,0,0,1,2.44,5.51H10Z"/><path className="b" d="M9.09,16.88A27.57,27.57,0,0,1,13.5,10a28.13,28.13,0,0,1,11-7.63"/><path className="a" d="M23.09,7.51l-.92-.4,1.98-4.52L19.5.94,19.84,0,25.5,2.01Z"/></g>
            </svg>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default StayInTouch;