import React, { useState } from 'react';

import { useMorph, easeOut } from 'react-morph';

import ContactButton from '../ContactButton'
import ContactModal from '../ContactModal'
import MenuButton from '../MenuButton'
import MenuExpanded from '../MenuExpanded'

import './headerContentPage.css'

import CurvedLines from '../../assets/images/curved-lines.svg'
import BlogImageExample from '../../assets/images/post-image-example.png'
import ProfileDecoration2 from '../../assets/images/profile-decoration2.svg'

const HeaderContentPage = () => {
  const [openContactModal, setOpenContactModal] = useState(false)
  const [openMenuExpanded, setOpenMenuExpanded] = useState(false)

  const contactMorph = useMorph({
    spring: {
      restDisplacementThreshold: 0.01,
      overshootClamping: true,
      damping: 5,
      stiffness: 30,
      mass: 1.4
    },
    easings: {
      scaleY: easeOut,
      scaleX: easeOut
    }
  });

  const menuMorph = useMorph({
    spring: {
      restDisplacementThreshold: 0.01,
      overshootClamping: true,
      mass: 2,
      damping: 5,
      stiffness: 50
    },
    easings: {
      scaleY: easeOut,
      scaleX: easeOut
    }
  });

  return (
    <>
      {openMenuExpanded && (<MenuExpanded menuMorph={menuMorph} setMenuExpanded={setOpenMenuExpanded} />)}
      {!openMenuExpanded && (<MenuButton menuMorph={menuMorph} setMenuExpanded={setOpenMenuExpanded} />)}
      <div id="headerContentPage" class="flex flex-col mt-16 md:mt-8 overflow-hidden justify-center md:items-center">
        <div class="flex flex-col self-center introduction-div w-full justify-center items-center">
          <h1 class="font-beBetter font-bold text-beBetterSize text-beBetterBlue tracking-wider mt-8 ml-0 md:ml-0 md:text-beBetterMdSize">Featured Insights</h1>
          <p class="font-beBetter font-light text-descriptionSize text-beBetterBlue tracking-widest mt-4 md:ml-0 break-all  md:text-buttonSize">
            Our latest thinking on the issues that matter<br/>
            most in business and management.
          </p>
        </div>

        <div id="post" class="flex flex-col lg:flex-row md:items-center h-full mt-16 md:space-x-16 md:mb-32 md:max-w-80%">

          <div class="md:flex md:flex-col md:order-1 md:-mt-8">
            <img class="object-contain -ml-24 md:-ml-24 inset-16 md:w-56" src={CurvedLines} alt="" />
            <img class="z-10 -mt-40 md:mt-0 md:-mt-32 md:min-w-600px" src={BlogImageExample} alt="ImagePost" />
          </div>

          <img class="absolute hidden md:inline self-end right-0 mt-24" src={ProfileDecoration2} alt="Decoration" />

          <div class="flex flex-col md:min-w-1/2 md:order-2 lg:m-2">
            <h1 class="font-beBetter font-medium text-personNameSize md:text-5xl text-beBetterBlue leading-tight breaking-normal mt-8">
              Coronavirus and the economy
            </h1>

            <p class="font-beBetter md:ml-0 font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 mt-4 breaking-normal">
              <i>August 6, 2020</i> - Our latest perspectives on the
              coronavirus outbreak, the twin threats to lives and
              livelihoods, and how organizations can prepare..
            </p>

            <button href="link" class="bg-buttonColor w-40 h-6 text-white text-buttonSize self-center md:self-start font-beBetter font-medium rounded-xlg mt-8 mb-16 z-50">
              Read more
            </button>

          </div>
        </div>
        {openContactModal && (<ContactModal contactMorph={contactMorph} setContactModal={setOpenContactModal} />)}
        {!openContactModal && (<ContactButton contactMorph={contactMorph} setContactModal = {setOpenContactModal} />)}
      </div>
    </>
  );
}

export default HeaderContentPage;