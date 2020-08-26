import React from 'react';

import "./services.css"

import PeopleIcon from '../PeopleIcon'
import MagneticIcon from '../MagneticIcon'
import ConnectionIcon from '../ConnectionIcon'
import ContactButton from '../ContactUsButton'

const Services = (props) =>  {
  return(
    <div id="benefits" class="flex flex-col items-center mt-32 space-y-16 md:ml-0 ml-4">
      <div class="flex flex-col items-center space-y-8">
        <h1 class="font-beBetter font-bold text-beBetterBlue text-epicTitle tracking-wider">Contact Us to talk about:</h1>
      </div>
      <div class="flex md:flex-wrap flex-col space-y-16 md:flex-row md:ml-24 md:space-y-0 md:justify-center">
        <div class="flex flex-col md:w-2/5 md:flex-row items-center md:space-x-4 space-y-4">
          <PeopleIcon />
          <p class="service-detail">
            How an Acquisition analysis can help you
            attract the most valuable customers.
          </p>
        </div>

        <div class="flex flex-col md:w-2/5 md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
          <MagneticIcon />
          <p class="service-detail">
            If Cohort Analysis and churn predictions can help you better understand LTV and retention.
          </p>
        </div>

        <div class="flex flex-col md:p-8 md:w-2/5 md:flex-row items-center md:space-x-4 space-y-4">
          <ConnectionIcon />
          <p class="service-detail">
            If you could benefit from strategic opportunities to create value and optimize resources.
          </p>
        </div>
      </div>
      <div class="hidden md:inline md:mb-16 ml-16 mt-8 z-40">
          <ContactButton setContactModal={props.setContactModal}/>
       </div>
    </div>
  )
}


export default Services;