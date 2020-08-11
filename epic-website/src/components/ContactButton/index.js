import React, { useState} from 'react'

import { useMorph, useFade, useMorphKeys } from 'react-morph';

import ContactButtonSVG from '../../assets/images/contact-button.svg'
import ContactButtonHoverSVG from '../../assets/images/contact-button-hover.svg'

import './contactButton.css'

const ContactButton = (props) => {
  const [toggle, setToggle] = useState(false);


  const morph = useMorph({
    spring: {
      restDisplacementThreshold: 0.01,
      overshootClamping: true,
      damping: 5,
      stiffness: 50
    },
  });

  return (
    <div {...props.contactMorph} class="fixed bottom-0 right-0 -mr-8 bg-transparent z-40 overflow-hidden" onClick={() => props.setContactModal(true) }>
        {toggle && <img  class="overflow-hidden md:mr-8" onMouseOut={() => setToggle(!toggle)} src={ContactButtonHoverSVG} {...morph}></img> }
      
        {!toggle && <img  class="mr-8 overflow-hidden" onMouseOut={() => setToggle(!toggle)} onMouseOver={() => setToggle(!toggle)} width="120px" src={ContactButtonSVG} {...morph}></img>}
    </div>
  );
}

export default ContactButton;