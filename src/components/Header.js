import React, { Component } from 'react';
import Logo from '../assets/logo.png'

import SearchIcon from '@material-ui/icons/Search';

export default class Header extends Component {
  render() {
    return (
        <nav style={styles} className="navbar navbar-expand-lg navbar-light bg-light static-top">
            <div className="container">
                <button className="navbar-toggler custom-btn"  data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                        <img src={Logo} alt=""/>
                </a>

                <button className="search-btn navbar-toggler "  data-toggle="collapse" data-target="#navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <SearchIcon className="navbar-toggler-icon1" />
                </button>
                <div className="navbar-collapse collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Circles <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Squares</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Triangle</a>
                        </li>
                    </ul>
                    <form className="form-inline d-none d-sm-block  ">
                        <div className="align-items-center" >
                            <input className="form-control text-right search-custom align-self-center" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="search-btn" type="submit">
                                <SearchIcon/>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </nav>
        
    );
  };
};

const styles = {
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(145, 158, 167, 0.25)',
}