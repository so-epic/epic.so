import React from 'react'

import MobileBackground from '../../assets/images/mobile-introduction-bg.svg'

function Introduction() {
  return (
    <div class="flex flex-col items-center container h-screen mt-16" style={{backgroundImage: `url(${MobileBackground})`}}>
      <div class="flex flex-col self-start">
        <h2 class="font-epicLogo font-bold mt-32 ml-8 text-epicTitle text-epicTitleBlue">epic</h2>
        <h1 class="font-beBetter font-bold text-beBetterSize text-beBetterBlue tracking-wider mt-8 ml-8">Be better.</h1>
        <p class="font-beBetter font-light text-descriptionSize text-beBetterBlue tracking-widest mt-4 ml-8">Grow a healthy business focusing <br/> on the right customers</p>
      </div>
    </div>
  );
}

export default Introduction;