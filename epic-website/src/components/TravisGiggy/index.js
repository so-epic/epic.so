import React from 'react'

import CurvedLines from '../../assets/images/curved-lines.svg'
import TravisGiggyImage from '../../assets/images/travis-giggy.png'

function TravisGiggy() {
  return (
    <div class="container mt-56">
      <img class="mt-8 ml-56 inset-16" src={CurvedLines} alt="" />
      <img class="-mt-48" src={TravisGiggyImage} alt="TravisGiggy" />
      <h1 class="font-beBetter font-medium text-personNameSize text-beBetterBlue leading-tight ml-8 mt-8">
        Travis Giggy
      </h1>
      <p class="font-beBetter font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 ml-8 mt-4">
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
      <h2 class="font-beBetter font-medium text-personJobSize text-personDescriptionColor ml-8 mt-4">
        Growth Expert
      </h2>
      <button class="mx-28 bg-blue-600 w-40 h-12 text-white text-personJobSize font-beBetter font-medium rounded mt-8">
        see more
      </button>
    </div>
  );
}

export default TravisGiggy;