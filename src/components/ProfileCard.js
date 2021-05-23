import React, { Component } from 'react';
import Girl from '../assets/girl.png'

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class ProfileCard extends Component {
  render() {
    return (
      <div className="container ">
          <div className="row  ">
              <div className="row align-items-center" >
                <img src={Girl} style={{width:"100px",height:"100px",borderRadius: "888px"}} />
                <div className="mx-3 justify-content-center" >
                    <h6 style={{fontSize: "20px",lineHeight: "32px",color: "#8500D7",}} >Jane Doe</h6>
                    <span className="lead small my-3" >Projectmanager Dekode – 5 min read – 2 june</span>
                    <div className="row mx-auto my-3 justify-content-space-around " style={{color: "#8500D7"}} >
                        <TwitterIcon/>
                        <FacebookIcon/>
                        <InstagramIcon/>
                    </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
}
