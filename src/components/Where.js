import React from "react";
import where1 from "../assets/images/where-1.jpg";
import where2 from "../assets/images/where-2.jpg";
import where3 from "../assets/images/where-3.jpg";
function Where() {
  return (
    <div id="whenwhere" className="whenwhere section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            {" "}
            <span className="oliven-title-meta">Câu hỏi</span>
            <h2 className="oliven-title">Ở đâu & Khi nào</h2>{" "}
          </div>
        </div>
        <div className="row">
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where1} alt="" />
            </div>
            <div className="content">
              <h5>Bữa tiệc nhà cô dâu</h5>
              <p>
                <i
                  className="ti-location-pin"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/fJF8rEbDx3xNtrGv5",
                      "_blank"
                    )
                  }
                >
                  Tiệc cưới Hoàng Gia, Nguyễn Tất Thành, Yên Thinh, Yên Bái
                </i>
              </p>
              <p>
                <i className="ti-time">15:00 – 17:00 16/03/2024</i>
              </p>
            </div>
          </div>
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where2} alt="" />
            </div>
            <div className="content">
              <h5>Lễ ăn hỏi</h5>
              <p>
                <i
                  className="ti-location-pin"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/5fATYKWTpFXnEmxk6",
                      "_blank"
                    )
                  }
                >
                  639 Đ. Đinh Tiên Hoàng, P.Yên Thịnh, Thành phố Yên Bái, Yên
                  Bái
                </i>
              </p>
              <p>
                <i className="ti-time">7:00 17/03/2024</i>
              </p>
            </div>
          </div>
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where3} alt="" />
            </div>
            <div className="content">
              <h5>Lễ thành hôn</h5>
              <p>
                <i
                  className="ti-direction-alt"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/SeMsMoVfJW6gMQwB9",
                      "_blank"
                    )
                  }
                >
                  xóm Kiên Quyết, Vô Lượng, Thống Nhất, Gia Lộc, Hải Dương
                </i>
              </p>
              <p>
                <i className="ti-direction">13:00 - 15:00 17/03/2024</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Where;
