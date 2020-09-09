import React, { useState, useEffect } from 'react';

import { useMorph, easeOut } from 'react-morph';

import NavBar from '../NavBar'
import MenuButton from '../MenuButton'
import MenuExpanded from '../MenuExpanded'
import BlogPost from '../BlogPost'

import './blogPage.css'


import ImgWhyThisWhyNow from '../../assets/images/green-arrows.jpg'
import ImgCohort from '../../assets/images/111.10.30.02-cohort-expand.gif'
import ImgCOVID from '../../assets/images/img-covid-tree.gif'
import ImgZebras from '../../assets/images/cohorts-ii-zebras.jpg'



const BlogPage = () => {
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
              <div id="blogPage" className="flex flex-col mt-16 md:mt-8 overflow-hidden justify-center md:items-center">
                <div className="flex flex-col self-center introduction-div w-full justify-center items-center">
                  <h1 className="font-beBetter font-bold text-beBetterSize text-beBetterBlue tracking-wider mt-16 ml-0 md:ml-0 md:text-beBetterMdSize">Featured Insights</h1>
                  <p className="font-beBetter font-light text-descriptionSize text-beBetterBlue tracking-widest mt-4 md:ml-0 break-all  md:text-buttonSize">
                    Our latest thinking on the issues that matter<br/>
                    most in business and management.
                  </p>
                </div>


                {/* DON'T BE AVERAGE - COHORTS II */}
                <BlogPost
                    postImage={ImgZebras}
                    postImageAlt="Cohort Analysis"
                    postHeadline="Don't be average! Follow this advice for success in business analytics"
                    postDate="Sep 3, 2020"
                    postDesc="If you were the head chef at a highly rated restaurant, the last thing you’d want to hear is that your dishes are AVERAGE. As a manager, you are the chef of your company, and when you think about performance metrics, the last thing you want is to be average!"
                    postURL="https://medium.com/epiclabs/dont-be-average-follow-this-advice-for-success-in-business-analytics-2888fac61c2"
                />

                {/* WHAT IS A COHORT AND WHY SHOULD I CARE */}
                <BlogPost
                    postImage={ImgCohort}
                    postImageAlt="Cohort Analysis"
                    postHeadline="What is a cohort and why should I care?"
                    postDate="Sep 1, 2020"
                    postDesc="The manager in a business is like the head chef in a restaurant, and skill with Cohort Analysis helps you cook up some profitable dishes."
                    postURL="https://medium.com/epiclabs/what-is-a-cohort-and-why-should-i-care-3bc689aca23b"
                />

                {/* WHAT CAN COVID TEACH US ABOUT BUSINESS */}
                <BlogPost
                    postImage={ImgCOVID}
                    postImageAlt="Grow your business the natural way"
                    postHeadline="What can COVID teach us about business?"
                    postDate="Aug 27, 2020"
                    postDesc="In the business world, a pandemic is interesting as an example of exponential growth and virality. We often use the term “viral marketing” or “going viral”, but rarely take the time to think about what it means. In the case of COVID-19 “virality”, there are interesting corollaries for business growth."
                    postURL="https://medium.com/epiclabs/what-can-covid-teach-us-about-business-c6fd363e804c"
                />


                {/* WHY THIS WHY NOW */}
                <BlogPost
                    postImage={ImgWhyThisWhyNow}
                    postImageAlt=""
                    postHeadline="Acquitention: Why this? Why now?"
                    postDate="August 19, 2020"
                    postDesc="We launched Epic Labs to help companies Acquire and Retain more customers. Our data-first strategy is called Acquitention, and we can help your company make more money."
                    postURL="https://www.linkedin.com/pulse/why-now-travis-giggy/"
                />

              </div>



        </div>
    )
}

export default BlogPage;