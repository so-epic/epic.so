import React, { useState, useEffect } from 'react';

import { useMorph, easeOut } from 'react-morph';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../styles/app.css'

import NavBar from '../NavBar'
import MenuButton from '../MenuButton'
import ContactButton from '../ContactButton'
import Introduction from '../Introduction'
import PabloVidal from '../PabloVidal'
import TravisGiggy from '../TravisGiggy'
import Methodology from '../Methodology'
import StayInTouch from '../StayInTouch'
import Services from '../Services'
import Footer from '../Footer'
import ContactModal from '../ContactModal'
import MenuExpanded from '../MenuExpanded'



const MainPage = () => {
  const [openContactModal, setOpenContactModal] = useState(false)
  const [openMenuExpanded, setOpenMenuExpanded] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

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

  const openEmailSentNotification = async (open) => {
    console.log(open)
    await setEmailSent(true)
    if (open) {
      toast.success("Email sent")
    }
  }


  return (
      <div className="flex flex-col overflow-hidden">
        {openMenuExpanded && (<MenuExpanded menuMorph={menuMorph} setMenuExpanded={setOpenMenuExpanded} />)}
        {openContactModal && (<ContactModal contactMorph={contactMorph} setContactModal={setOpenContactModal} setEmailSent={openEmailSentNotification} />)}
        <NavBar />
        {!openMenuExpanded && (<MenuButton menuMorph={menuMorph} setMenuExpanded={setOpenMenuExpanded} />)}
        {!openContactModal && (<ContactButton contactMorph={contactMorph} setContactModal = {setOpenContactModal} />)}
        <Introduction setContactModal={setOpenContactModal} />
        <PabloVidal/>
        <TravisGiggy />
        <Methodology />
        <StayInTouch />
        <Services setContactModal={setOpenContactModal} />
        <Footer />
        {emailSent && (<ToastContainer />)}
      </div>    
  );
}

export default MainPage;