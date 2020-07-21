import React from 'react'

import ContactButtonSVG from '../../assets/images/contact-button.svg'

function ContactButton() {
  return (
    <div class="fixed bottom-0 right-0">
      <img class="flex" src={ContactButtonSVG}></img>
    </div>
  )
}

export default ContactButton;