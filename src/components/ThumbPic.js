import React, { Component } from 'react';


export default class ThumbPic extends Component {
  render() {
    return (
      <div className="my-3 position-relative " >
        <img src={this.props.img} className="img-fluid" style={{borderRadius:' 0px 8px 8px 0px'}} />
        <figcaption class="blockquote-footer my-3 ">
            {this.props.caption}
        </figcaption>

        <div className="image-cover position-absolute col-sm-10 col-lg-10 ">
            <span  >
                <blockquote>{this.props.blockquote}</blockquote>
            </span>
        </div>
      </div>
    );
  }
}
