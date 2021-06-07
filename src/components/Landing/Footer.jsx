import React from "react";

const Footer = () => {
  return (
    <footer className="text-center-xs space--sm bg--dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <ul className="list-inline">
              <li>
                <a href="#services">
                  <span className="h6 type--uppercase">Hizmetlerimiz</span>
                </a>
              </li>
              <li>
                <a href="https://app.depopro.com.tr/pay/" target="_blank">
                  <span className="h6 type--uppercase">Online Ödeme</span>
                </a>
              </li>
              <li>
                <a href="https://blog.depopro.com.tr/" target="_blank">
                  <span className="h6 type--uppercase">Blog</span>
                </a>
              </li>
              <li>
                <a href="/faq" target="_blank">
                  <span className="h6 type--uppercase">
                    Sık Sorulan Sorular
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-5 text-right text-center-xs">
            <ul className="social-list list-inline list--hover">
              <li>
                <a href="https://wa.me/905374759733" target="_blank">
                  <i className="socicon socicon-whatsapp icon icon--sm"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC2p9VmkJz47urN7Z_pAuuTA"
                  target="_blank"
                >
                  <i className="socicon socicon-youtube icon icon--sm"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/depopro__/?hl=tr"
                  target="_blank"
                >
                  <i className="socicon socicon-instagram icon icon--sm"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7">
            <span className="type--fine-print">
              © <span className="update-year"></span> BulutMD Yazılım
            </span>
          </div>
          <div className="col-sm-5 text-right text-center-xs">
            <a className="type--fine-print" href="mailto:info@depopro.com">
              info@depopro.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
