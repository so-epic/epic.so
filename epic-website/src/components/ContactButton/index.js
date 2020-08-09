import React, { useState} from 'react'

import { useMorph, useFade, useMorphKeys } from 'react-morph';

import { easeInSin, easeOutSin, easeIn, easeOut } from 'react-morph';

import ContactButtonSVG from '../../assets/images/contact-button.svg'
import ContactButtonHoverSVG from '../../assets/images/contact-button-hover.svg'

function ContactButton() {
  const [toggle, setToggle] = useState(true);
  

  // const morph = useMorph({
  //   easings: {
  //     translateX: easeOutSin,
  //     translateY: easeInSin,
  //     scaleX: easeIn,
  //     scaleY: easeOut
  //   },
  // });

  const spring = { damping: 100, stiffness: 50 }
  const fadeIn = useFade({ spring, isInitial: toggle, delaysRatio: 1 })
  const fadeOut = useFade({ spring, isInitial: !toggle })

  const morph = useMorph()

  return (
    <div class="fixed bottom-0 right-0 -mr-8 md:-mr-8 bg-transparent z-40" onClick={() => setToggle(!toggle)}>
      {toggle ? (
        <img {...morph} {...fadeIn} src={ContactButtonSVG} width="80%" />
      ) : (
        <img class="" {...morph} {...fadeOut} src={ContactButtonHoverSVG} width="100%" />
      )}
    </div>
  );
}

export default ContactButton;