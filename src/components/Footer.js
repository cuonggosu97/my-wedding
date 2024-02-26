import React from "react";
import Logo from "../assets/images/logo.png";
function Footer() {
  return (
    <div className="footer2">
      <div className="oliven-narrow-content">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              <a>
                <img src={Logo} alt="" />
                <span>
                  Phương <small>&</small> Cường
                </span>
              </a>
            </h2>
            <p className="copyright">
              17 tháng 3 năm 2024 – Gia Lộc, Hải Dương
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
