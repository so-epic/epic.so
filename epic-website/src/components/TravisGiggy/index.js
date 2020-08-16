import React from 'react'

import CurvedLines from '../../assets/images/curved-lines.svg'
import TravisGiggyImage from '../../assets/images/travis-giggy.png'
import ProfileDecoration2 from '../../assets/images/profile-decoration2.svg'

const TravisGiggy = () => {
  return (
    <div id="travis" class="flex flex-col md:flex-row md:justify-around items-center h-full mt-4 mb-32">
      <div class="md:flex md:flex-col md:self-start md:order-1 md:-mt-8 md:ml-32 md:px-16">
        <img class="object-contain -ml-24 md:-ml-24 inset-16 md:w-56" src={CurvedLines} alt="" />
        <img class="z-10 -mt-40 md:mt-0 md:-mt-32 md:w-126 md:min-w-400px" src={TravisGiggyImage} alt="TravisGiggy" />
      </div>
      <img class="absolute hidden md:inline self-end right-0 mt-24" src={ProfileDecoration2} alt="Decoration" />
      
      <div class="flex flex-col md:min-w-1/2 md:order-2">
        <h1 class="font-beBetter ml-8 md:ml-64 font-medium text-personNameSize md:text-personNameMdSize text-beBetterBlue leading-tight mt-8">
          Travis Giggy
        </h1>
        <p class="font-beBetter ml-8 md:ml-64 md:max-w-md font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 mt-4 breaking-normal">
          Travis Giggy is a serial enterpreneur in
          Silicon Valley with more than 20 years
          leading product and technology teams.
          He is a technology expert, angel investor,
          advisor, and shareholder in many tech
          startups. His areas of expertise include
          databases, programming, customer
          development, product management, big 
          data analysis, and financial engineering.
        </p>
        <h2 class="font-beBetter ml-8 md:ml-64 font-medium text-personJobSize text-personDescriptionColor mt-4">
          Growth Expert
        </h2>
        <button class="mx-28 md:ml-64 bg-buttonColor w-40 h-6 text-white text-buttonSize font-beBetter font-medium rounded-xlg mt-8 mb-16 z-50">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/travisgiggy/">See more</a>
        </button>
      </div>
    </div>
  );
}

export default TravisGiggy;