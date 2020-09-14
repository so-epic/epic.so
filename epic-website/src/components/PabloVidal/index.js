import React from 'react'

import CurvedLines from '../../assets/images/curved-lines.svg'
import PabloVidalImage from '../../assets/images/pablo-vidal.png'
import ProfileDecoration from '../../assets/images/profile-decoration.svg'

const PabloVidal = () => {
  return (
    <div  className="flex flex-col md:flex-row md:justify-center items-center h-full mt-16 mb-16">
      <div className="md:flex md:flex-col md:self-start md:order-2 md:-mt-8">
        <img id="aboutUs" className="object-contain -ml-24 -mr-24 self-end inset-16 md:w-56" src={CurvedLines} alt="" />
        <img className="z-10 -mt-40 md:-mt-32 md:w-126" src={PabloVidalImage} alt="PabloVidal" />
      </div>
      <img className="absolute hidden md:inline self-end right-0 mt-24" src={ProfileDecoration} alt="PabloVidal" />
      
      <div className="flex flex-col md:min-w-1/2 self-start">
        <h1 className="font-beBetter ml-8 font-medium text-personNameSize md:text-personNameMdSize text-beBetterBlue leading-tight mt-8">
          <span>Pablo </span>
          <span className="text-nameSecondaryColor">Vidal Areán</span>
        </h1>
        <p className="font-beBetter ml-8 md:max-w-md font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 mt-4 breaking-normal">
          Pablo Vidal Arean is an accomplished
          Senior Executive, Enterpreunuer, Advisor,
          and Board Member with more than
          25 years of success across the
          information services and technology,
          marketing and advertising,
          telecommunications, leisure and
          travel industries.
        </p>
        <h2 className="font-beBetter ml-8 font-medium text-personJobSize text-personDescriptionColor mt-4">
          Strategy, Marketing and
          Growth expert
        </h2>
          <button className="mx-28 md:ml-8 bg-buttonColor w-40 h-6 text-white text-buttonSize font-beBetter font-medium rounded-xlg mt-8 mb-16 z-50">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pablovidalarean/">See more</a>
          </button>
      </div>
    </div>
  );
}

export default PabloVidal;