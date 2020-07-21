import React from 'react'

import CurvedLines from '../../assets/images/curved-lines.svg'
import PabloVidalImage from '../../assets/images/pablo-vidal.png'
function PabloVidal() {
  return (
    <div class="container h-screen">
      <img class="mt-8 -ml-24 inset-16" src={CurvedLines} alt="" />
      <img class="-mt-48" src={PabloVidalImage} alt="PabloVidal" />
      <h1 class="font-beBetter font-medium text-personNameSize text-beBetterBlue leading-tight ml-8 mt-8">
        Pablo Vidal<br/>
        Areán
      </h1>
      <p class="font-beBetter font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 ml-8 mt-4">
        Pablo Vidal Arean is an accomplished<br/>
        Senior Executive, Enterpreunuer, Advisor,<br/>
        and Board Member with more than<br/>
        25 years of success across the<br/>
        information services and technology,<br/>
        marketing and advertising,<br/>
        telecommunications,leisu leisure and<br/>
        travel industries
      </p>
      <h2 class="font-beBetter font-medium text-personJobSize text-personDescriptionColor ml-8 mt-4">
        Strategy, Marketing and<br/>
        Growth expert
      </h2>
      <button class="mx-28 bg-blue-600 w-40 h-12 text-white text-personJobSize font-beBetter font-medium rounded mt-8">
        see more
      </button>
    </div>
  );
}

export default PabloVidal;