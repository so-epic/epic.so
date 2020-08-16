import React from 'react';

import CloseModalButton from '../../assets/images/close-modal-button.svg'

const ContactModal = (props) => {

  const CloseContactModal = () => {
    props.setContactModal(false);
  }


  return (
    <div {...props.contactMorph}  class="z-75 modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div {...props.contactMorph}  class="modal-overlay fixed w-full h-full bg-white opacity-75 top-0 left-0 cursor-pointer z-75"></div>
      <div {...props.contactMorph}  class="modal-contact-div fixed flex-col top-0 ml-0 md:ml-64 mt-32 z-80">
        <h1 class="text-4xl text-white">Contact</h1>
        <p class="text-white mt-8">
          We leverage big data and algorhitms to<br/>
          uncover the full potential of your business.<br/>
          increase retention, attract the most valuable<br/>
          customers, and grow your company more<br/>
          efficiently.
        </p>
        <form class="flex flex-col w-full max-w-sm mt-8 z-50">
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
          <button onClick={CloseContactModal} class="text-white mt-16">Send</button>
        </form>
      </div>

      <img alt="" onClick={CloseContactModal} class="fixed top-0 right-0 mr-16 md:mr-64 mt-32 md:mt-32 z-80" src={CloseModalButton}></img>

      <svg class="hidden z-75 md:inline" {...props.contactMorph} xmlns="http://www.w3.org/2000/svg" width="2379.355" height="2368.406" viewBox="-600 0 2379.355 2368.406">
        <path id="Background" d="M876.379,0c484.011,0,876.379,385.672,876.379,861.422s-392.368,861.422-876.379,861.422S0,1337.173,0,861.422,392.368,0,876.379,0Z" transform="translate(0 876.379) rotate(-30)" fill="#011865"/>
      </svg>

      <svg {...props.contactMorph} class="inline z-75 md:hidden" xmlns="http://www.w3.org/2000/svg" width="4000" height="2368.406" viewBox="750 -200 800 2368.406">
        <path id="Background" d="M876.379,0c484.011,0,876.379,385.672,876.379,861.422s-392.368,861.422-876.379,861.422S0,1337.173,0,861.422,392.368,0,876.379,0Z" transform="translate(0 876.379) rotate(-30)" fill="#011865"/>
      </svg>
    </div>
  )
}

export default ContactModal;