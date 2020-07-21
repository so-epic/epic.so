import React from 'react';

import '../../styles/app.css'

import MenuButton from '../MenuButton'
import ContactButton from '../ContactButton'
import Introduction from '../Introduction'
import PabloVidal from '../PabloVidal'
import TravisGiggy from '../TravisGiggy'

function App() {
  return (
    <div className="flex flex-col">
      <MenuButton />
      <ContactButton />
      <Introduction />
      <PabloVidal />
      <TravisGiggy />
    </div>
  );
}

export default App;
