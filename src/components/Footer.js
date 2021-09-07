import React, { Component } from 'react';
import Logo from '../assets/logo.png'

export default class Footer extends Component {
  render() {
    return (

      <section id="footer">
      <hr/>
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="align-items-start col-xs-12 col-sm-4 col-md-4">
            <img src={Logo}  />
            <ul className="list-unstyled" >
              <li className="my-4 text-left">Deokode As</li>
              <li className="my-4 text-left">Tlf: 23 08 00 00</li>
              <li className="my-4 text-left">E-post: info@dekode.no</li>
              <li className="my-4 text-left">Tollbugata 11, Oslo</li>
              <li className="my-4 text-left">Postboks 489 Sentrum, 0105 Oslo</li>
            </ul>

          </div>
          <div className="align-items-start col-xs-12 col-sm-4 col-md-4">
          <img src={Logo} style={{visibility:"hidden"}}  />
            <ul className="list-unstyled " >
              <a><li className="my-4 text-left">Tjenester</li></a>
              <a><li className="my-4 text-left">Produkter</li></a>
              <a><li className="my-4 text-left">Kontakt</li></a>
              <a><li className="my-4 text-left">Abonnement</li></a>
              <a><li className="my-4 text-left">Logg inn</li></a>
            </ul>

          </div>
          <div className="align-items-start col-xs-12 col-sm-4 col-md-4">
          <img src={Logo} style={{visibility:"hidden"}}  />
              <ul className="list-unstyled " >
                <a><li className="my-4 text-left">Personvernerklæring</li></a>
                <a><li className="my-4 text-left">Cookies</li></a>
                <a><li className="my-4 text-left">Language: ENG (US)</li></a>
              </ul>
              <div className="row">
              <div className="align-items-start col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                  <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope"></i></a></li>
              </div>
              <hr/>
            </div>	
          </div>
        </div>
      </div>
    </section>
    );
  }
}
