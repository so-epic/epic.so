import React, { useState } from 'react'

import { useMorph, easeInSin, easeOutSin, easeIn, easeOut } from 'react-morph';

import ContactExpanded from '../../assets/images/contact-expanded.svg'


function ContactUsButton() {
  const [toggle, setToggle] = useState(true);
  const morph = useMorph({
    easings: {
      translateX: easeOutSin,
      translateY: easeInSin,
      scaleX: easeIn,
      scaleY: easeOut
    },
  });
  return (
    <div class="" onMouseOver={() => setToggle(!toggle)} onMouseOut={() => setToggle(true)}>
      {toggle ? (
        <button class="bg-buttonColor w-40 h-6 text-white text-buttonSize font-beBetter font-medium rounded-xlg mt-8 md:-mt-4 mb-16">
          Contact us
        </button>
      ) : (
        <img class="mb-16" {...morph.scaleX} src={ContactExpanded} width="60%" />
      )}
    </div>
  );
}
export default ContactUsButton;