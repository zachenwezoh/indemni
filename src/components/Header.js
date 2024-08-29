import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Header = () => {
    return (
      <header className="rainbow-header header-default header-transparent header-sticky">
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-2 col-md-6 col-6">
              <div className="logo">
                <Link to="/">
                  <img className="logo" src="/images/Indemni.png" alt="ChatBot Logo" />
                </Link>
              </div>
            </div>
  
            <div className="col-lg-8 d-none d-lg-block">
              <nav className="mainmenu-nav d-none d-lg-flex justify-content-center">
                <ul className="mainmenu">
                  <li><Link to="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">Contact Us</Link></li>
                </ul>
              </nav>
            </div>
  
            <div className="col-lg-2 col-md-6 col-6 position-static">
              <div className="header-right">
                <div className="header-btn">
                </div>
  
                <div className="mobile-menu-bar ml--5 d-flex justify-content-end d-lg-none">
                  <div className="hamberger">
                    <button className="hamberger-button">
                      <i className="fa-sharp fa-regular fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  