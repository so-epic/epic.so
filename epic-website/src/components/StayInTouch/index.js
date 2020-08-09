import React from 'react';

function StayInTouch() {
  return(
    <div class="flex flex-col items-center h-full mt-32 space-y-16">
      <div class="flex flex-col items-center space-y-8">
        <h1 class="font-beBetter font-bold text-beBetterBlue text-epicTitle tracking-wider">Stay in touch</h1>
        <p class="font-beBetter font-semibold text-stayInTouchDescriptionColor text-contactFontSize">
          Want to know more about us while learn<br/>
          about marketing and business strategies<br/>
          and terms?
        </p>
      </div>

      <div class="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 ">
        <div class="flex flex-col h-70 w-112 items-center bg-stayInTouchBlue rounded-xlg md:w-124">
          <h2 class="self-end mt-16 font-beBetter font-medium text-white text-methodologyTitleSize mr-4">Epic Newsletter</h2>
          <p class="self-end font-beBetter font-light text-white text-contactFontSize mr-4 mt-4">Keep in touch with all news about us and<br/>the finance market</p>
          <button class="font-beBetter font-semibold text-white text-contactFontSize mt-32">Join newsletter</button>
        </div>

        <div class="flex flex-col h-70 w-112 items-center bg-white border-2 border-epicBlue rounded-xlg md:w-124">
          <h2 class="self-start ml-4 mt-32 font-beBetter font-medium text-beBetterBlue text-methodologyTitleSize mr-4">Epic Newsletter</h2>
          <p class="self-start font-beBetter font-light text-beBetterBlue text-contactFontSize ml-4 mt-8 ">Keep in touch with all news about us and<br/>the finance market</p>
          <button class="mt-16 font-beBetter font-semibold text-beBetterBlue text-contactFontSize">Open blog</button>
          <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="27.001" height="26.01" viewBox="0 0 27.001 26.01"><defs></defs><g transform="translate(0.751 0.75)">
            <path class="a" d="M10,4.51H2.44A2.44,2.44,0,0,0,0,7V22.07a2.44,2.44,0,0,0,2.44,2.44H17.56A2.44,2.44,0,0,0,20,22.07V14.51H19v7.56a1.45,1.45,0,0,1-1.44,1.44H2.44A1.45,1.45,0,0,1,1,22.07V7A1.45,1.45,0,0,1,2.44,5.51H10Z"/><path class="b" d="M9.09,16.88A27.57,27.57,0,0,1,13.5,10a28.13,28.13,0,0,1,11-7.63"/><path class="a" d="M23.09,7.51l-.92-.4,1.98-4.52L19.5.94,19.84,0,25.5,2.01Z"/></g>
          </svg>
        </div>
      </div>

    </div>
  )
}

export default StayInTouch;