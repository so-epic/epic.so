import React from 'react';

import "./services.css"

import PeopleIcon from '../PeopleIcon'
import MagneticIcon from '../MagneticIcon'
import ConnectionIcon from '../ConnectionIcon'
import ContactButton from '../ContactUsButton'

const Services = (props) =>  {
  return(
    <div id="benefits" className="flex flex-col items-center mt-32 space-y-16 md:ml-0 ml-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="font-beBetter font-bold text-beBetterBlue text-epicTitle tracking-wider">Contact Us to talk about:</h1>
      </div>
      <div className="flex md:flex-wrap flex-col space-y-16 md:flex-row md:ml-24 md:space-y-0 md:justify-center">
        <div className="flex flex-col md:w-2/5 md:flex-row items-center md:space-x-4 space-y-4">
          <PeopleIcon />
          <p className="service-detail">
            How an Acquisition analysis can help you
            attract the most valuable customers.
          </p>
        </div>

        <div className="flex flex-col md:w-2/5 md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
          <MagneticIcon />
          <p className="service-detail">
            If Cohort Analysis and churn predictions can help you better understand LTV and retention.
          </p>
        </div>

        <div className="flex flex-col md:p-8 md:w-2/5 md:flex-row items-center md:space-x-4 space-y-4">
          <ConnectionIcon />
          <p className="service-detail">
            If you could benefit from strategic opportunities to create value and optimize resources.
          </p>
        </div>
      </div>
      <div className="hidden md:inline md:mb-16 ml-16 mt-8 z-40">
          <ContactButton setContactModal={props.setContactModal}/>
       </div>
    </div>
  )
}


export default Services;