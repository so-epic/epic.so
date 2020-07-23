import React from 'react'

import CurvedLines from '../../assets/images/curved-lines.svg'
import TravisGiggyImage from '../../assets/images/travis-giggy.png'

function TravisGiggy() {
  return (
    <div class="flex flex-col items-center container h-full mt-4">
      <div class="self-end">
        <img class="object-contain -mr-24 self-end inset-16" src={CurvedLines} alt="" />
      </div>
      <img class="z-10 -mt-24" src={TravisGiggyImage} alt="TravisGiggy" />
      <div class="flex flex-col self-start ml-8">
        <h1 class="font-beBetter font-medium text-personNameSize text-beBetterBlue leading-tight mt-8">
          Travis Giggy
        </h1>
        <p class="font-beBetter font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 mt-4">
          Travis Giggy is a serial enterpreneur in<br/>
          Silicon Valley with more than 20 years<br/>
          leading product and technology teams.<br/>
          He is a technology expert, angel investor,<br/>
          advisor, and shareholder in many tech<br/>
          startups. His areas of expertise include<br/>
          databases, programming, customer<br/>
          development, product management, big <br/>
          data analysis, and financial engineering.
        </p>
        <h2 class="font-beBetter font-medium text-personJobSize text-personDescriptionColor mt-4">
          Growth Expert
        </h2>
      </div>
      <button class="mx-28 bg-buttonColor w-40 h-6 text-white text-buttonSize font-beBetter font-medium rounded-xlg mt-8 mb-16">
        see more
      </button>
    </div>
  );
}

export default TravisGiggy;