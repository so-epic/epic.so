import React from 'react';

import '../../styles/app.css'

import Introduction from '../Introduction'
import PabloVidal from '../PabloVidal'
import TravisGiggy from '../TravisGiggy'

function App() {
  return (
    <div className="flex flex-col">
      <Introduction />
      <PabloVidal />
      <TravisGiggy />
    </div>
  );
}

export default App;
