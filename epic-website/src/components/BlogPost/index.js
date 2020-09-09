import React from 'react'

import CurvedLines from '../../assets/images/curved-lines.svg'
import ProfileDecoration2 from '../../assets/images/profile-decoration2.svg'

const BlogPost = (props) => {
    return (

        <div id="post" className="flex flex-col lg:flex-row md:items-center h-full mt-16 md:space-x-16 mb-32 md:max-w-80%">

          <a target="_blank" rel="noopener noreferrer" href="{props.postURL}">
            <div className="md:flex md:flex-col md:order-1 md:-mt-8">
              {props.curvedLines !== false &&
                    <img className="object-contain -ml-24 md:-ml-24 inset-16 md:w-56" src={CurvedLines} alt="" />
                }
              <img className="z-10 -mt-40 md:mt-0 md:-mt-32 md:min-w-600px" src={props.postImage} alt="{props.postImgAlt}" />
            </div>
          </a>

          <img className="absolute hidden md:inline self-end right-0 mt-24" src={ProfileDecoration2} alt="Decoration" />

          <div className="flex flex-col md:min-w-1/2 md:order-2 lg:m-2">
            <h1 className="font-beBetter font-medium text-personNameSize md:text-5xl text-beBetterBlue leading-tight breaking-normal mt-8">
              {props.postHeadline}
            </h1>

            <p className="font-beBetter md:ml-0 font-regular text-descriptionSize text-personDescriptionColor tracking-widest leading-7 mt-4 breaking-normal">
              <i>{props.postDate}</i> - {props.postDesc}
            </p>

            <button href="link" className="bg-buttonColor w-40 h-6 text-white text-buttonSize self-center md:self-start font-beBetter font-medium rounded-xlg mt-8 mb-16 z-50">
              <a target="_blank" rel="noopener noreferrer" href="{props.postURL}">Read more</a>
            </button>

          </div>

        </div>

    )
}

export default BlogPost;