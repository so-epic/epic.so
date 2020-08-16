import React from 'react';

import { MorphReplaceResize } from 'react-svg-morph';

import './contactUsButton.css'

class Normal extends React.Component {
    render() {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="#0891c4">
            <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
              <path class="cls-1" d="M5,54.18c7.83-3.52,15.23-6.85,20.63-10.48,14.58-9.8,26.83-30,31.54-38.45C50,8.39,43.91,12.75,36.24,17.83,18.78,29.41,4.46,31.89.59,49.21a24.08,24.08,0,0,0-.52,7.21Z"/><path class="cls-1" d="M241.85,41.83c-1.38,2.31-3,4.92-4.86,7.67-8.25,12.25-16.54,21.23-24.66,26.69-5.61,3.77-13.13,7.15-21.08,10.73-13.59,6.11-28.48,12.82-34.89,22.41a168.6,168.6,0,0,1,24.13,1.17c48.31,5.48,39.36-16.11,59-28.29C255.87,72,255.75,56.51,241.85,41.83Z"/><path class="cls-1" d="M190,84.18c7.83-3.52,15.23-6.85,20.63-10.48,12.46-8.38,23.21-24.32,29-34.07a77.14,77.14,0,0,0-7.49-6.25C209.25,16.51,192.81,23.29,154,16S130,2.18,96.43.28C80.41-.62,70,.7,61.5,3.58A172.29,172.29,0,0,1,52,19.5C43.74,31.75,35.45,40.73,27.33,46.19,21.72,50,14.2,53.34,6.25,56.92L.5,59.52C3,72.08,14.59,82.62,22.27,92.7c9.7,12.73,10.74,26,57.93,26.4,36.18.33,47.44-8.12,72.49-9.61C158.88,98.2,175.19,90.86,190,84.18Z"/><path class="cls-2" d="M5,54.18c7.83-3.52,15.23-6.85,20.63-10.48,14.58-9.8,26.83-30,31.54-38.45C50,8.39,43.91,12.75,36.24,17.83,18.78,29.41,4.46,31.89.59,49.21a24.08,24.08,0,0,0-.52,7.21Z"/><path class="cls-2" d="M241.85,41.83c-1.38,2.31-3,4.92-4.86,7.67-8.25,12.25-16.54,21.23-24.66,26.69-5.61,3.77-13.13,7.15-21.08,10.73-13.59,6.11-28.48,12.82-34.89,22.41a168.6,168.6,0,0,1,24.13,1.17c48.31,5.48,39.36-16.11,59-28.29C255.87,72,255.75,56.51,241.85,41.83Z"/><path class="cls-2" d="M190,84.18c7.83-3.52,15.23-6.85,20.63-10.48,12.46-8.38,23.21-24.32,29-34.07a77.14,77.14,0,0,0-7.49-6.25C209.25,16.51,192.81,23.29,154,16S130,2.18,96.43.28C80.41-.62,70,.7,61.5,3.58A172.29,172.29,0,0,1,52,19.5C43.74,31.75,35.45,40.73,27.33,46.19,21.72,50,14.2,53.34,6.25,56.92L.5,59.52C3,72.08,14.59,82.62,22.27,92.7c9.7,12.73,10.74,26,57.93,26.4,36.18.33,47.44-8.12,72.49-9.61C158.88,98.2,175.19,90.86,190,84.18Z"/>
              </g>
            </g>
          </svg>
        );
    }
}

class Hover extends React.Component {
    render() {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="220" height="200" viewBox="0 0 220 200">
          <g id="Group_296" data-name="Group 296" transform="translate(-75 -648)">
            <path id="bg" d="M18,0H202a18,18,0,0,1,18,18V48a18,18,0,0,1-18,18H18A18,18,0,0,1,0,48V18A18,18,0,0,1,18,0Z" transform="translate(75 648)" fill="#0891c4"/>  </g>
        </svg>
        
        );
    }
}

class ContacUsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    toggleChecked() {
        this.setState({checked: !this.state.checked});
    }

    render() {
        return (
          <div class="z-20 ml-16 cursor-pointer" onClick={() => this.props.setContactModal(true)} onMouseLeave={() => this.toggleChecked()} onMouseEnter={() => this.toggleChecked()}>
                <p class="absolute text-white contact-us-font text-xl cursor-pointer">Contact Us</p>
                <MorphReplaceResize class="div-contactUs" rotation={"none"} width={200} height={100}>
                    {this.state.checked ? <Normal key="checked" /> : <Hover key="checkbox" />}
                </MorphReplaceResize>
            </div>
        );
    }
}

export default ContacUsButton;