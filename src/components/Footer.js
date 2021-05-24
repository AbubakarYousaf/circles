import React, { Component } from 'react';
import Logo from '../assets/logo.png'

export default class Footer extends Component {
  render() {
    return (

      <section id="footer">
      <hr/>
      <div class="container">
        <div class="row text-center text-xs-center text-sm-left text-md-left">
          <div class="align-items-start col-xs-12 col-sm-4 col-md-4">
            <img src={Logo}  />
            <ul class="list-unstyled" >
              <li class="my-4 text-left">Deokode As</li>
              <li class="my-4 text-left">Tlf: 23 08 00 00</li>
              <li class="my-4 text-left">E-post: info@dekode.no</li>
              <li class="my-4 text-left">Tollbugata 11, Oslo</li>
              <li class="my-4 text-left">Postboks 489 Sentrum, 0105 Oslo</li>
            </ul>

          </div>
          <div class="align-items-start col-xs-12 col-sm-4 col-md-4">
          <img src={Logo} style={{visibility:"hidden"}}  />
            <ul class="list-unstyled " >
              <a><li class="my-4 text-left">Tjenester</li></a>
              <a><li class="my-4 text-left">Produkter</li></a>
              <a><li class="my-4 text-left">Kontakt</li></a>
              <a><li class="my-4 text-left">Abonnement</li></a>
              <a><li class="my-4 text-left">Logg inn</li></a>
            </ul>

          </div>
          <div class="align-items-start col-xs-12 col-sm-4 col-md-4">
          <img src={Logo} style={{visibility:"hidden"}}  />
              <ul class="list-unstyled " >
                <a><li class="my-4 text-left">Personvernerklæring</li></a>
                <a><li class="my-4 text-left">Cookies</li></a>
                <a><li class="my-4 text-left">Language: ENG (US)</li></a>
              </ul>
              <div class="row">
              <div class="align-items-start col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                  <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-facebook"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-twitter"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-instagram"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-google-plus"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i class="fa fa-envelope"></i></a></li>
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
