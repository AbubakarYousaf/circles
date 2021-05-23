import React, { Component } from 'react';

export default class BreadCrumb extends Component {
  render() {
    return (

          <div class="row justify-content-center">
            <nav aria-label="breadcrumb" >
                <ol class="breadcrumb" style={{backgroundColor : "transparent"}}>
                    <li class="breadcrumb-item custom-crumb"><a href="#">teft</a></li>
                    <li class="breadcrumb-item custom-crumb"><a href="#">Circles</a></li>
                    <li class="breadcrumb-item active custom-crumb" aria-current="page">Purple Circles</li>
                </ol>
            </nav>
          </div>
    );
  }
}


const styles= {

}
