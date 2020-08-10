import React, { useState} from 'react'

import { useMorph, useFade, easeInSin, easeOutSin, easeIn, easeOut } from 'react-morph';

import ContactExpanded from '../../assets/images/contact-expanded.svg'
import X from '../../assets/images/fingerprint.svg'


const ContactUsButton = () => {
  const [toggle, setToggle] = useState(false);
  const morph = useMorph({
    spring: {
      restDisplacementThreshold: 0.0001,
      overshootClamping: true,
      stiffness: 50,
    },
    easings: {
      translateX: easeIn,
      translateY: easeIn
    },
    isReversed: !toggle,
  });
  
  return (
    <div onMouseOut={() => setToggle(false)} class="w-160px h-50px z-20">
        {!toggle && <button onMouseOut={() => setToggle(!toggle)} onMouseOver={() => setToggle(!toggle)}  {...morph} class="bg-buttonColor w-40 h-50px h-6 text-white text-buttonSize font-beBetter font-medium rounded-xlg mb-16">
          Contact us
        </button>}
      
        {toggle && <img class="" onMouseOut={() => setToggle(!toggle)} src={ContactExpanded} {...morph}></img>}
        
    </div>
  );
}
export default ContactUsButton;