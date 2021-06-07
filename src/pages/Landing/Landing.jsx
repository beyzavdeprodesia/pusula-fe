import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Row, Col } from "antd";
import { Footer, Header } from "components";
import axios from "axios";

const goToAnchor = () => {
  const { hash } = window.location;
  if (hash) {
    const timeout = setTimeout(
      () => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) element.scrollIntoView();
      },
      100,
      () => clearTimeout(timeout)
    );
  }
};

const Landing = () => {
  const history = useHistory();

  return (
    <>
      <div>
        <a id="start"></a>
        <Header />
        <div className="main-container">
          <section
            className="cover cover-features height-100 imagebg space--lg parallax"
            data-overlay="8"
            style={{
              backgroundImage: "url('img/banner1.jpg')",
              backgroundSize: "cover",
            }}
          >
            {/* <div className="background-image-holder" name="banner-bg">
              <img alt="background" src="img/banner1.jpg" />
            </div> */}

            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h1>
                    Depopro İle Daha
                    <br className="hidden-xs" />
                    <span
                      className="inline-block typed-text typed-text--cursor color--primary"
                      data-typed-strings="Güvenli,Kolay,Temiz"
                    ></span>
                    <br className="hidden-xs" />
                    Depolama Çözümleri
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-6 align-self-center">
                  <a href="#calculate">
                    <div className="feature feature--featured feature-1 boxed boxed--border">
                      {/* <i className="icon icon--md icon-Calculator" style={{ color: '#f27a1a' }}></i> */}
                      <i
                        class="fas fa-calculator"
                        style={{ color: "#f27a1a", fontSize: "30px" }}
                      ></i>
                      <h5 style={{ marginTop: "10px", fontSize: "17px" }}>
                        Depo İhtiyacınızı Hesaplayın
                      </h5>
                    </div>
                  </a>
                </div>

                <div className="col-md-6 col-sm-6 col-6 align-self-center">
                  <a href="#eCommerce">
                    <div className="feature feature--featured feature-1 boxed boxed--border">
                      <i
                        class="far fa-handshake"
                        style={{ color: "#f27a1a", fontSize: "30px" }}
                      ></i>
                      {/* <img
                        alt="background"
                        src="img/handshake.png"
                        style={{ maxWidth: '12%', marginBottom: '15px', color: '#f27a1a' }}
                      /> */}
                      <h5
                        style={{
                          marginTop: "10px",
                          fontSize: "17px",
                          marginBottom: "-10px",
                        }}
                      >
                        E-Ticaret Depolama
                      </h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <a id="eCommerce" className="in-page-link"></a>

          <a id="gallery" className="in-page-link"></a>

          <a id="calculate" className="in-page-link"></a>
          <div>
            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            ></div>
          </div>
          <section className="switchable bg--primary space--sm" id="contact">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-6 col-md-7 col-12">
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.218376197167!2d28.755417351607534!3d41.107921579189046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa8b7b412afd3%3A0x203113b71b352df0!2sMerkez%20Kaya%C5%9Fehir%20Avm!5e0!3m2!1str!2str!4v1604921208066!5m2!1str!2str"
                      width="600"
                      height="450"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5">
                  <div className="switchable__text">
                    <h3>
                      Merkez Kayaşehir AVM <br />
                      Kayabaşı Mah. Rabia Caddesi No:9 <br />
                      Başakşehir / İSTANBUL
                    </h3>
                    <p className="lead">
                      E-Mail:{" "}
                      <a href="mailto:info@depopro.com">info@depopro.com</a>
                      <br /> Telefon: 0850 450 0 999 <br /> WhatsApp: 0537 475
                      97 33
                    </p>
                    <p className="lead">
                      İstediğiniz zaman bizi arayın veya çağrı bırakın, tüm
                      sorularınızı 24 saat içinde yanıtlıyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Landing;
