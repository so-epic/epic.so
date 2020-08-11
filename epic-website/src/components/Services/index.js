import React from 'react';

import "./services.css"

import PeopleIcon from '../PeopleIcon'
import MagneticIcon from '../MagneticIcon'
import ConnectionIcon from '../ConnectionIcon'
import ContactButton from '../ContactUsButton'

const Services = () =>  {
  return(
    <div class="flex flex-col items-center mt-32 space-y-16">
      <div class="flex md:flex-wrap flex-col space-y-16 md:flex-row md:ml-24 md:space-y-0 md:justify-center">
        <div class="flex flex-col md:w-2/5 md:flex-row items-center md:space-x-4 space-y-4">
          <PeopleIcon />
          <p class="service-detail">
            Full detailed acquisition analysis.<br/>
            Attract the most valuable customers.
          </p>
        </div>

        <div class="flex flex-col md:w-2/5 md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
          <MagneticIcon />
          <p class="service-detail">
            Full detailed acquisition analysis.<br/>
            Attract the most valuable customers.
          </p>
        </div>

        <div class="flex flex-col md:p-8 md:w-2/5 md:flex-row items-center md:space-x-4 space-y-4">
          <ConnectionIcon />
          <p class="service-detail">
            Full detailed acquisition analysis.<br/>
            Attract the most valuable customers.
          </p>
        </div>
      </div>
      <div class="hidden md:inline md:mb-16 ml-16 mt-8 z-40">
          <ContactButton/>
       </div>
    </div>
  )
}


export default Services;