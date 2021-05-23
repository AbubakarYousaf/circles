import React, { Component } from 'react';
import Logo from '../assets/logo.png'

import SearchIcon from '@material-ui/icons/Search';

export default class Header extends Component {
  render() {
    return (
        <nav style={styles} className="navbar navbar-expand-lg navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                        <img src={Logo} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Circles <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Rectangle</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Triangle</a>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control" style={{border:'none',outline:"none"}} type="search" placeholder="Search" aria-label="Search"/>
                        <button style={{outline:'none',border:"none",backgroundColor:"transparent"}} type="submit">
                            <SearchIcon/>
                        </button>
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