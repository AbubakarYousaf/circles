import React, { Component } from 'react';
import Ocean from '../assets/ocean.png'

export default class ThumbPic extends Component {
  render() {
    return (
      <div className="my-3 position-relative " >
        <img src={Ocean} className="img-fluid" style={{borderRadius:' 0px 8px 8px 0px'}} />
        <figcaption class="blockquote-footer my-3 ">
            In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum, between approximately 380 and 450 nanometers.
        </figcaption>

        <div className="image-cover position-absolute">
            <span  >
                <blockquote>“The process of making the dye was long, difficult and expensive”</blockquote>
            </span>
        </div>
      </div>
    );
  }
}
