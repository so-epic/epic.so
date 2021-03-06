import React from 'react'

import CurvedLines from '../../assets/images/curved-lines.svg'
import TravisGiggyImage from '../../assets/images/travis-giggy.png'
import ProfileDecoration2 from '../../assets/images/profile-decoration2.svg'

const TravisGiggy = () => {
  return (

    <div  className="flex flex-col md:flex-row md:justify-center items-center h-full mt-16 mb-16 lg:-space-x-24">
      <div className="md:flex md:flex-col md:self-start md:order-0 md:min-w-1/2">
        <img className="object-contain -ml-24 md:-ml-24 inset-16 md:w-56" src={CurvedLines} alt="" />
        <img className="z-10 -mt-40 md:-mt-32 md:w-126" src={TravisGiggyImage} alt="PabloVidal" />
      </div>
      <img className="absolute hidden md:inline self-end right-0 mt-24" src={ProfileDecoration2} alt="PabloVidal" />
      
      <div className="flex flex-col self-start">
        <h1 className="font-beBetter ml-8 font-medium text-personNameSize md:text-personNameMdSize text-beBetterBlue leading-tight mt-8">
          <span>Travis </span>
          <span className="text-nameSecondaryColor">Giggy</span>
        </h1>
        <p className="font-beBetter ml-8 md:max-w-md font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 mt-4 breaking-normal">
          Travis Giggy is a serial enterpreneur in
          Silicon Valley with 20 years
          leading product and technology teams.
          He is a technology expert, angel investor,
          and advisor for tech
          startups. His areas of expertise include
          databases, programming, customer
          development, product management, big 
          data analysis, and financial engineering.
        </p>
        <h2 className="font-beBetter ml-8 font-medium text-personJobSize text-personDescriptionColor mt-4">
          Data and Growth Expert
        </h2>
          <button className="mx-28 md:ml-8 bg-buttonColor w-40 h-6 text-white text-buttonSize font-beBetter font-medium rounded-xlg mt-8 mb-16 z-50">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/travisgiggy/">See more</a>
          </button>
      </div>
    </div>

  );
}

export default TravisGiggy;