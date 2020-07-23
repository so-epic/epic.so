import React from 'react'

import CurvedLines from '../../assets/images/curved-lines.svg'
import PabloVidalImage from '../../assets/images/pablo-vidal.png'
function PabloVidal() {
  return (
    <div class="flex flex-col items-center container h-full mt-16">
      <div class="self-start">
        <img class="object-contain -mr-24 self-end inset-16" src={CurvedLines} alt="" />
      </div>
      <img class="-mt-24" src={PabloVidalImage} alt="PabloVidal" />
      <div class="flex flex-col self-start ml-8">
        <h1 class="font-beBetter font-medium text-personNameSize text-beBetterBlue leading-tight mt-8">
          Pablo Vidal<br/>
          Areán
        </h1>
        <p class="font-beBetter font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 mt-4">
          Pablo Vidal Arean is an accomplished<br/>
          Senior Executive, Enterpreunuer, Advisor,<br/>
          and Board Member with more than<br/>
          25 years of success across the<br/>
          information services and technology,<br/>
          marketing and advertising,<br/>
          telecommunications,leisu leisure and<br/>
          travel industries
        </p>
        <h2 class="font-beBetter font-medium text-personJobSize text-personDescriptionColor mt-4">
          Strategy, Marketing and<br/>
          Growth expert
        </h2>
      </div>
      <button class="mx-28 bg-buttonColor w-40 h-6 text-white text-buttonSize font-beBetter font-medium rounded-xlg mt-8 mb-16">
        see more
      </button>
    </div>
  );
}

export default PabloVidal;