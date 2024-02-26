import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
function Sidebar() {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle("slide");
  };

  return (
    <>
      <a
        href="/"
        onClick={openMenu}
        className={`js-oliven-nav-toggle oliven-nav-toggle${
          show ? " active" : ""
        }`}
      >
        <i></i>
      </a>
      <aside id="oliven-aside">
        <div className="oliven-logo">
          <a>
            <img src={Logo} alt="" />
            <span>
              Phương <small>&</small> Cường
            </span>
            <h6>17.03.2024</h6>
          </a>
        </div>
        <nav className="oliven-main-menu">
          <ul>
            <li>
              <a href="#home">Trang chủ</a>
            </li>
            <li>
              <a href="#couple">Cặp đôi</a>
            </li>
            <li>
              <a href="#story">Câu chuyện của chúng tôi</a>
            </li>
            <li>
              <a href="#organization">Sự kiện</a>
            </li>
            <li>
              <a href="#gallery">Thư viện</a>
            </li>
            <li>
              <a href="#whenwhere">Ở đâu & Khi nào</a>
            </li>
          </ul>
        </nav>
        <div className="footer1">
          {" "}
          <span className="separator"></span>
          <p>
            Hôn lễ Phương & Cường
            <br />
            16 tháng 3 năm 2024, Yên Bái
            <br />
            17 tháng 3 năm 2024, Hải Dương
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
