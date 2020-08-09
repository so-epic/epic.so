import React from 'react';

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


// import Footer from '../Footer'

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <NavBar />
      <MenuButton />
      <ContactButton />
      <Introduction />
      <PabloVidal />
      <TravisGiggy />
      <Methodology />
      <StayInTouch />
      <Services />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
