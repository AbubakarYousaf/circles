import React, { Component } from 'react';

export default class BreadCrumb extends Component {
  render() {
    return (

          <div className="row justify-content-center">
            <nav aria-label="breadcrumb" >
                <ol className="breadcrumb custom-bedcrumb " >
                    <li className="breadcrumb-item custom-crumb"><a href="#">teft</a></li>
                    <li className="breadcrumb-item custom-crumb"><a href="#">Circles</a></li>
                    <li className="breadcrumb-item active custom-crumb" aria-current="page">Purple Circles</li>
                </ol>
            </nav>
          </div>
    );
  }
}


const styles= {

}
