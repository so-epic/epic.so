import React from 'react'

import InsideMask from '../../assets/images/inside-mask.svg'
import ContactButton from '../ContactUsButton'
import LinesIntroduction from '../LinesIntroduction'

import './introduction.css'

function Introduction() {
  return (
    <div class="flex flex-col h-screen mt-16 introduction-div overflow-hidden">
      <div class="flex flex-col self-start">
        <h2 class="font-epicLogo font-bold mt-32 ml-8 text-epicTitle text-epicTitleBlue md:ml-16 md:text-personNameSize">epic</h2>
        <h1 class="font-beBetter font-bold text-beBetterSize text-beBetterBlue tracking-wider mt-8 ml-8 md:ml-16 md:text-beBetterMdSize">Be better.</h1>
        <p class="font-beBetter font-light text-descriptionSize text-beBetterBlue tracking-widest mt-4 ml-8 md:ml-16 md:text-buttonSize">Grow a healthy business focusing <br/> on the right customers</p>
        <div class="hidden md:inline ml-16 mt-8">
          <ContactButton/>
        </div>
      </div>
      <div class="hidden md:inline mt-16">
        <LinesIntroduction />
      </div>
    </div>
  );
}

export default Introduction;