import React, { useRef, useState } from 'react';

import { useMorph, useFade, useMorphKeys, easeOut } from 'react-morph';

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


const App = () => {
  const ref = useRef(null);
  const [openContactModal, setOpenContactModal] = useState(false)
  const [openMenuExpanded, setOpenMenuExpanded] = useState(false)
  console.log(ref)

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
    <div className="flex flex-col overflow-hidden">
      {openMenuExpanded && (<MenuExpanded menuMorph={menuMorph} setMenuExpanded={setOpenMenuExpanded} />)}
      {openContactModal && (<ContactModal contactMorph={contactMorph} setContactModal={setOpenContactModal} />)}
      <NavBar />
      {!openMenuExpanded && (<MenuButton menuMorph={menuMorph} setMenuExpanded={setOpenMenuExpanded} />)}
      {!openContactModal && (<ContactButton contactMorph={contactMorph} setContactModal = {setOpenContactModal} />)}
      <Introduction />
      <PabloVidal/>
      <TravisGiggy />
      <Methodology />
      <StayInTouch />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
