import React, { useState } from 'react';

import { useMorph, easeOut } from 'react-morph';

import NavBar from '../NavBar'
import MenuButton from '../MenuButton'
import MenuExpanded from '../MenuExpanded'

const PrivacyPolicyPage = () => {

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

    return (

        <div className="flex flex-col overflow-hidden">
            <NavBar/>

            {openMenuExpanded && (<MenuExpanded menuMorph={menuMorph} setMenuExpanded={setOpenMenuExpanded} />)}
            {!openMenuExpanded && (<MenuButton menuMorph={menuMorph} setMenuExpanded={setOpenMenuExpanded} />)}

            <div id="blogPage" class="flex flex-col mt-16 md:mt-8 overflow-hidden justify-center md:items-center">


                <div class="flex flex-col self-center introduction-div w-full justify-center items-center">
                  <h1 class="font-beBetter font-bold text-beBetterSize text-beBetterBlue tracking-wider mt-16 ml-0 md:ml-0 md:text-beBetterMdSize">Epic Privacy Policy</h1>
                  <p class="font-beBetter font-light text-descriptionSize text-beBetterBlue tracking-widest mt-4 md:ml-0 break-all  md:text-buttonSize">
                    <small>(updated July 31, 2020)</small>
                  </p>
                </div>

                <div class="md:max-w-80%">
                    
                    <p class="mt-8">
                        This policy details how data about you is used when you access our websites and services (together, "Epic") or interact with us. If we update it, we will revise the date, place notices on Epic if changes are material, and/or obtain your consent as required by law.
                    </p>

                    <h3 class="font-bold mt-8 mb-4">1. Protecting your privacy</h3>
                    <ul class="list-outside list-disc ml-5">
                        <li>We take precautions to prevent unauthorized access to or misuse of data about you.</li>
                        <li>We do not run ads, other than the classifieds posted by our users.</li>
                        <li>We do not share your data with third parties for marketing purposes.</li>
                        <li>We do not engage in cross-marketing or link-referral programs.</li>
                        <li>We do not employ tracking devices for marketing purposes.</li>
                        <li>We do not send you unsolicited communications for marketing purposes.</li>
                        <li>We do not engage in affiliate marketing (and prohibit it on Epic).</li>
                        <li>We do provide email proxy &amp; relay services to reduce unwanted email.</li>
                        <li>Please review privacy policies of any third party sites linked to from Epic.</li>
                        <li>We do not respond to "Do Not Track" signals (see allaboutdnt.com).</li>
                    </ul>
                    <h3 class="font-bold mt-8 mb-4">2. Data we use to provide/improve our services and/or combat fraud/abuse:</h3>
                    <ul class="list-outside list-disc ml-5">
                        <li>data you post on or send via Epic, and/or send us directly or via other sites</li>
                        <li>credit card data, which is transmitted to payment processors via a security protocol (e.g. SSL).</li>
                        <li>data you submit or provide (e.g. name, address, email, phone, fax, photos, tax ID).</li>
                        <li>web log data (e.g. web page views, access times, IP address, HTTP headers).</li>
                        <li>data collected via cookies and similar technologies (e.g. preferences, searches, "favorites," anti-abuse metrics).</li>
                        <li>data about your device(s) (e.g. screen size, DOM local storage, plugins).</li>
                        <li>data from 3rd parties (e.g. phone type, IP geo-location).</li>
                    </ul>
                    <h3 class="font-bold mt-8 mb-4">3. Data we store</h3>
                    <ul class="list-outside list-disc ml-5">
                        <li>We retain data as needed for our business purposes and/or as required by law.</li>
                        <li>We make good faith efforts to store data securely, but can make no guarantees.</li>
                        <li>You may access and update certain data about you via your account login.</li>
                    </ul>
                    <h3 class="font-bold mt-8 mb-4">4. Circumstances in which we may disclose user data:</h3>
                    <ul class="list-outside list-disc ml-5">
                        <li>to vendors and service providers working on our behalf (e.g. payment processing, account verification, fraud prevention).</li>
                        <li>to respond to subpoenas, search warrants, court orders, or other legal process.</li>
                        <li>to protect our rights, property, or safety, or that of users of Epic or the general public.</li>
                        <li>with your consent (e.g. if you authorize us to share data with other users).</li>
                        <li>in connection with a merger, bankruptcy, or sale/transfer of assets.</li>
                        <li>in aggregate/summary form, where it cannot reasonably be used to identify you.</li>
                    </ul>

                    <p class="mt-8">
                        <b>California Users</b> (capitalized terms have the meaning given by the California Consumer Privacy Act ("CCPA")):
                        <ul class="list-outside list-disc ml-5">
                            <li>We do not Sell Personal Information ("PI").</li>
                            <li>In the last 12 months, we collected these categories of PI: (1) Identifiers; (2) PI described in Cal. Civ. Code &sect;1798.80(e); (3) Commercial information; (4) Internet and other network activity information; and (5) Geolocation data.</li>
                            <li>In the last 12 months, we have disclosed for a Business Purpose: (1) Identifiers; (2) Payment information; and (3) Commercial information.</li>
                            <li>The CCPA grants CA residents in certain circumstances: (1) the right to request for the last 12 months specific pieces of PI, categories of PI, categories of sources of PI, Business Purpose or Commercial Purpose for collecting PI, and categories of Third Parties with whom we have shared PI; (2) the right to request deletion of PI; and (3) the right not to be discriminated against for exercising the rights listed above.</li>
                            <li>To exercise CCPA rights, please send a message to admin<code>@</code>epic.so. Exercise is subject to verification (e.g. via our existing authentication practices for registered users or via information provided by you matching information we have already collected) and certain exceptions, and will be processed in accordance with applicable law. An authorized agent may make a request for you by providing written permission signed by you.</li>
                            <li>CA residents under age 18 registered as Epic users may request (via admin<code>@</code>epic.so) and obtain removal of content or information publicly posted on Epic. Removal does not ensure complete or comprehensive removal of said content or information.</li>
                            <li>If you have any questions or concerns about Epic's privacy policy and practices please email to admin<code>@</code>epic.so.</li>
                        </ul>
                    </p>
                    <p class="mt-8">
                        <b>International Users</b> - By accessing Epic or providing us data, you agree we may use and disclose data we collect as described here or as communicated to you, transmit it outside your resident jurisdiction, and store it on servers in the United States. For more information please contact our privacy officer at admin<code>@</code>epic.so.
                    </p>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

            </div>
        </div>

    )

}

export default PrivacyPolicyPage;