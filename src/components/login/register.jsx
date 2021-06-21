import React from "react";
import loginImg from "../../assets/files/login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">İşveren Giriş Paneli</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Kullanıcı Adı</label>
              <input type="text" name="username" placeholder="Kullanıcı Adı" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Şifre</label>
              <input type="password" name="password" placeholder="Şifre" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Giriş Yap
          </button>
        </div>
      </div>
    );
  }
}
