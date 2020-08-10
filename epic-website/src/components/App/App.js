import React, { useRef, useState } from 'react';

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


function App() {
  const ref = useRef(null);
  const [openContactModal, setOpenContactModal] = useState(false)
  const [openMenuExpanded, setOpenMenuExpanded] = useState(false)
  console.log(ref)
  return (
    <div className="flex flex-col overflow-hidden">
      {openMenuExpanded && (<MenuExpanded />)}
      {openContactModal && (<ContactModal />)}
      <NavBar />
      <MenuButton setMenuExpanded={setOpenMenuExpanded} />
      <ContactButton setContactModal = {setOpenContactModal} />
      <Introduction />
      <PabloVidal/>
      <TravisGiggy />
      <Methodology />
      <StayInTouch />
      <Services />
    </div>
  );
}

export default App;
