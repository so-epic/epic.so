import React from 'react';

import PeopleIcon from '../PeopleIcon'
import MagneticIcon from '../MagneticIcon'
import ConnectionIcon from '../ConnectionIcon'

function Services() {
  return(
    <div class="flex flex-col items-center container h-full mt-32 space-y-16">
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

      <button class="mx-28 bg-buttonColor w-40 h-6 text-white text-buttonSize font-beBetter font-medium rounded-xlg mt-8 mb-16">
        Contact us
      </button>
    </div>
  )
}


export default Services;