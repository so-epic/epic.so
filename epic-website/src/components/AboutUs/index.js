import React, { useState, useEffect } from 'react';

import { useMorph, easeOut } from 'react-morph';

import NavBar from '../NavBar'
import MenuButton from '../MenuButton'
import MenuExpanded from '../MenuExpanded'
import PabloVidal from '../PabloVidal'
import TravisGiggy from '../TravisGiggy'

const PrivacyPolicyPage = () => {

    document.title = 'Epic Labs Privacy Policy'

    const [openMenuExpanded, setOpenMenuExpanded] = useState(false)

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

    //scroll to top of page
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (

        <div className="flex flex-col overflow-hidden">
            <NavBar/>

            {openMenuExpanded && (<MenuExpanded menuMorph={menuMorph} setMenuExpanded={setOpenMenuExpanded} />)}
            {!openMenuExpanded && (<MenuButton menuMorph={menuMorph} setMenuExpanded={setOpenMenuExpanded} />)}



            <div className="flex flex-col self-center introduction-div mt-16 w-full justify-center items-center">
              <h1 className="font-beBetter font-bold text-beBetterSize text-beBetterBlue tracking-wider mt-16 ml-0 md:ml-0 md:text-beBetterMdSize">About Us</h1>
              <p className="font-beBetter font-light text-descriptionSize text-beBetterBlue tracking-widest mt-4 md:ml-0 break-all  md:text-buttonSize">
                <small>The Epic team</small>
              </p>
            </div>

            <PabloVidal/>
            <TravisGiggy />

        </div>

    )

}

export default PrivacyPolicyPage;