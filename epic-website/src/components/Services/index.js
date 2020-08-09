import React from 'react';

import PeopleIcon from '../PeopleIcon'
import MagneticIcon from '../MagneticIcon'
import ConnectionIcon from '../ConnectionIcon'
import ContactUsButton from '../ContactUsButton'

function Services() {
  return(
    <div class="flex flex-col items-center h-full mt-32 space-y-16">
      <div class="flex flex-col space-y-16 md:flex-row md:space-x-16 md:space-y-0 md:justify-center">
        <div class="flex flex-col items-center space-y-4">
          <PeopleIcon />
          <p>
            Full detailed acquisition analysis.<br/>
            Attract the most valuable customers.
          </p>
        </div>

        <div class="flex flex-col items-center space-y-4">
          <MagneticIcon />
          <p>
            Full detailed acquisition analysis.<br/>
            Attract the most valuable customers.
          </p>
        </div>

        <div class="flex flex-col items-center space-y-4">
          <ConnectionIcon />
          <p>
            Full detailed acquisition analysis.<br/>
            Attract the most valuable customers.
          </p>
        </div>
      </div>
      <ContactUsButton />
      
    </div>
  )
}


export default Services;