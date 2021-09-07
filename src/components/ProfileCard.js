import React, { Component } from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class ProfileCard extends Component {
  render() {
    return (
      <div className="container d-none d-sm-block ">
          <div className="row  ">
              <div className="row align-items-center" >
                <img src={this.props.authorInfo.img} className="author-image" />
                <div className="mx-3 justify-content-center" >
                    <h6 className="author-name" >{this.props.authorInfo.name}</h6>
                    <span className="lead small my-3" >{this.props.authorInfo.title} – {this.props.authorInfo.readTime} – {this.props.authorInfo.datePub}</span>
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
