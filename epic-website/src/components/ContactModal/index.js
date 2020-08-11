import React from 'react';

const ContactModal = () => {
  return (
    <div class="z-50 modal pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div class="modal-overlay fixed w-full h-full bg-black opacity-25 top-0 left-0 cursor-pointer"></div>
      <div class="modal-contact-div fixed flex-col top-0 ml-64 mt-32">
        <h1 class="text-4xl text-white">Contact</h1>
        <p class="text-white mt-8">
          We leverage big data and algorhitms to<br/>
          uncover the full potential of your business.<br/>
          increase retention, attract the most valuable<br/>
          customers, and grow your company more<br/>
          efficiently.
        </p>
        <form class="w-full max-w-sm mt-8">
          <div class="flex flex-col items-center border-b-2 border-white py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Name" aria-label="Full name"/>
          </div>

          <div class="flex flex-col items-center border-b-2 border-white py-2 mt-8">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Phone or e-mail" aria-label="Full name"/>
          </div>

          <div class="flex flex-col items-center border-b-2 border-white py-2 mt-8">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Subject" aria-label="Full name"/>
          </div>

          <div class="flex flex-col items-center border-b-2 border-white py-2 mt-8">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Message" aria-label="Full name"/>
          </div>
          
        </form>
      </div>

      <svg class="hidden md:inline" xmlns="http://www.w3.org/2000/svg" width="2379.355" height="2368.406" viewBox="-600 0 2379.355 2368.406">
        <path id="Background" d="M876.379,0c484.011,0,876.379,385.672,876.379,861.422s-392.368,861.422-876.379,861.422S0,1337.173,0,861.422,392.368,0,876.379,0Z" transform="translate(0 876.379) rotate(-30)" fill="#011865"/>
      </svg>

      <svg class="inline md:hidden" xmlns="http://www.w3.org/2000/svg" width="4000" height="2368.406" viewBox="750 -200 800 2368.406">
        <path id="Background" d="M876.379,0c484.011,0,876.379,385.672,876.379,861.422s-392.368,861.422-876.379,861.422S0,1337.173,0,861.422,392.368,0,876.379,0Z" transform="translate(0 876.379) rotate(-30)" fill="#011865"/>
      </svg>
    </div>
  )
}

export default ContactModal;