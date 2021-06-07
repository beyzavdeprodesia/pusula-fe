import React from "react";
import { Link } from "react-router-dom";
import { ExternalScripts } from "components";

const Header = ({ overlay }) => {
  return (
    <>
      <ExternalScripts />
      <div className="nav-container">
        <div>
          <div className="bar bar--sm visible-sm visible-xs">
            <div className="container">
              <div className="row">
                <div className="col-3 col-md-2">
                  <Link to="/">
                    <img
                      className="logo"
                      alt="logo"
                      src="img/depopro_logo.png"
                      style={{ maxHeight: "8em" }}
                    />
                  </Link>
                </div>
                <div
                  className="col-9 col-md-10 text-right"
                  style={{ marginTop: "22px" }}
                >
                  <a
                    href="/"
                    className="hamburger-toggle"
                    data-toggle-class="#menu1;hidden-xs hidden-sm"
                  >
                    <i className="icon icon--sm stack-interface stack-menu"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav
            id="menu1"
            className="bar bar-1 hidden-sm hidden-xs bar--absolute bar--transparent"
            data-overlay={overlay && overlay}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-md-2 hidden-sm hidden-xs">
                  <div className="bar__module">
                    <Link to="/">
                      <img
                        className="logo"
                        alt="logo"
                        src="img/depopro_logo.png"
                        style={{ maxHeight: "8em", zIndex: 2 }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-11 col-md-12 text-right text-left-xs text-left-sm menuContentContainer">
                  <div className="bar__module">
                    <ul
                      className="menu-horizontal text-left"
                      style={{ paddingBottom: 10 }}
                    >
                      <li className="fixed-display">
                        <a href="#start">ANASAYFA</a>
                      </li>
                      <li>
                        <a href="/#eCommerce">E-TİCARET DEPOLAMA</a>
                      </li>
                      <li>
                        <a href="/#services">HİZMETLERİMİZ</a>
                      </li>
                      <li>
                        <a href="/#warehousesTitle">DEPO ÇEŞİTLERİ</a>
                      </li>

                      <li>
                        <a href="/#contact">İLETİŞİM</a>
                      </li>
                      <li>
                        <a href="/faq" target="_blank">
                          SSS
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn--md type--uppercase"
                          href="/#contactForm"
                        >
                          <span className="btn__text">TEKLİF AL</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn--md type--uppercase"
                          href="/#calculate"
                        >
                          <span className="btn__text">DEPO KİRALA</span>
                        </a>
                      </li>

                      <li>
                        <a
                          className="btn btn--md btn--primary type--uppercase"
                          href="https://app.depopro.com.tr/pay/"
                          target="_blank"
                        >
                          <span className="btn__text">Online Ödeme</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
