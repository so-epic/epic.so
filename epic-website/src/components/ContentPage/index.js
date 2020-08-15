import React from 'react'

import NavBar from '../NavBar'
import HeaderContentPage from '../HeaderContentPage'


const ContentPage = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <NavBar/>
      <HeaderContentPage />
    </div>
  )
}

export default ContentPage;