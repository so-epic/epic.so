import React, { useState } from 'react';

import { useMorph, easeOut } from 'react-morph';

import ContactButton from '../ContactButton'
import ContactModal from '../ContactModal'
import MenuButton from '../MenuButton'
import MenuExpanded from '../MenuExpanded'

import './headerContentPage.css'

import CurvedLines from '../../assets/images/curved-lines.svg'
import ImgWhyThisWhyNow from '../../assets/images/green-arrows.jpg'
import ImgCohort from '../../assets/images/111.10.30.02-cohort-expand.gif'
import ImgCOVID from '../../assets/images/img-covid-tree.gif'

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
          <h1 class="font-beBetter font-bold text-beBetterSize text-beBetterBlue tracking-wider mt-16 ml-0 md:ml-0 md:text-beBetterMdSize">Featured Insights</h1>
          <p class="font-beBetter font-light text-descriptionSize text-beBetterBlue tracking-widest mt-4 md:ml-0 break-all  md:text-buttonSize">
            Our latest thinking on the issues that matter<br/>
            most in business and management.
          </p>
        </div>



        {/* WHAT IS A COHORT AND WHY SHOULD I CARE */}
        <div id="post" class="flex flex-col lg:flex-row md:items-center h-full mt-16 md:space-x-16 mb-32 md:max-w-80%">

          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/epiclabs/what-is-a-cohort-and-why-should-i-care-3bc689aca23b">
            <div class="md:flex md:flex-col md:order-1 md:-mt-8">
              <img class="object-contain -ml-24 md:-ml-24 inset-16 md:w-56" src={CurvedLines} alt="" />
              <img class="z-10 -mt-40 md:mt-0 md:-mt-32 md:min-w-600px" src={ImgCohort} alt="Cohort Analysis" />
            </div>
          </a>

          <img class="absolute hidden md:inline self-end right-0 mt-24" src={ProfileDecoration2} alt="Decoration" />

          <div class="flex flex-col md:min-w-1/2 md:order-2 lg:m-2">
            <h1 class="font-beBetter font-medium text-personNameSize md:text-5xl text-beBetterBlue leading-tight breaking-normal mt-8">
              What is a cohort and why should I care?
            </h1>

            <p class="font-beBetter md:ml-0 font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 mt-4 breaking-normal">
              <i>Sep 1, 2020</i> - The manager in a business is like the head chef in a restaurant, and skill with Cohort Analysis helps you cook up some profitable dishes.
            </p>

            <button href="link" class="bg-buttonColor w-40 h-6 text-white text-buttonSize self-center md:self-start font-beBetter font-medium rounded-xlg mt-8 mb-16 z-50">
              <a target="_blank" rel="noopener noreferrer" href="https://medium.com/epiclabs/what-is-a-cohort-and-why-should-i-care-3bc689aca23b">Read more</a>
            </button>

          </div>

        </div>


        {/* WHAT CAN COVID TEACH US ABOUT BUSINESS */}
        <div id="post" class="flex flex-col lg:flex-row md:items-center h-full md:space-x-16 mb-32 md:max-w-80%">

          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/epiclabs/what-can-covid-teach-us-about-business-c6fd363e804c">
            <div class="md:flex md:flex-col md:order-1 md:-mt-8">
              <img class="z-10 -mt-40 md:mt-0 md:-mt-32 md:min-w-600px" src={ImgCOVID} alt="Grow your business the natural way" />
            </div>
          </a>

          <div class="flex flex-col md:min-w-1/2 md:order-2 lg:m-2">
            <h1 class="font-beBetter font-medium text-personNameSize md:text-5xl text-beBetterBlue leading-tight breaking-normal mt-8">
              What can COVID teach us about business?
            </h1>

            <p class="font-beBetter md:ml-0 font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 mt-4 breaking-normal">
              <i>Aug 27, 2020</i> - In the business world, a pandemic is interesting as an example of exponential growth and virality. We often use the term “viral marketing” or “going viral”, but rarely take the time to think about what it means. In the case of COVID-19 “virality”, there are interesting corollaries for business growth.
            </p>

            <button href="link" class="bg-buttonColor w-40 h-6 text-white text-buttonSize self-center md:self-start font-beBetter font-medium rounded-xlg mt-8 mb-16 z-50">
              <a target="_blank" rel="noopener noreferrer" href="https://medium.com/epiclabs/what-can-covid-teach-us-about-business-c6fd363e804c">Read more</a>
            </button>

          </div>

        </div>




        <div id="post" class="flex flex-col lg:flex-row md:items-center h-full mt-16 md:space-x-16 mb-32 md:max-w-80%">

          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/pulse/why-now-travis-giggy/">
            <div class="md:flex md:flex-col md:order-1 md:-mt-8">
              <img class="z-10 -mt-40 md:mt-0 md:-mt-32 md:min-w-600px" src={ImgWhyThisWhyNow} alt="ImagePost" />
            </div>
          </a>

          <img class="absolute hidden md:inline self-end right-0 mt-24" src={ProfileDecoration2} alt="Decoration" />

          <div class="flex flex-col md:min-w-1/2 md:order-2 lg:m-2">
            <h1 class="font-beBetter font-medium text-personNameSize md:text-5xl text-beBetterBlue leading-tight breaking-normal mt-8">
              Acquitention: Why this? Why now?
            </h1>

            <p class="font-beBetter md:ml-0 font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 mt-4 breaking-normal">
              <i>August 19, 2020</i> - We launched Epic Labs to help companies Acquire and Retain more customers. Our data-first strategy is called Acquitention, and we can help your company make more money.
            </p>

            <button href="link" class="bg-buttonColor w-40 h-6 text-white text-buttonSize self-center md:self-start font-beBetter font-medium rounded-xlg mt-8 mb-16 z-50">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/pulse/why-now-travis-giggy/">Read more</a>
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