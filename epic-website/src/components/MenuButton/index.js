import React from 'react'

import MenuButtonSVG from '../../assets/images/menu-button.svg'

function MenuButton() {
  return (
    <div class="fixed">
      <img class="flex" src={MenuButtonSVG}></img>
    </div>
  )
}

export default MenuButton;