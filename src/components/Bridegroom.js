import React from "react";
import Bride from "../assets/images/bride.png";
import Groom from "../assets/images/groom.jpg";
function Bridegroom() {
  return (
    <div id="couple" className="bridegroom clear section-padding bg-pink">
      <div className="container">
        <div className="row mb-60">
          <div className="col-md-6">
            <div
              className="item toright mb-30 animate-box"
              data-animate-effect="fadeInLeft"
              style={{ height: "100%" }}
            >
              <div
                className="img"
                onClick={() =>
                  window.open("https://www.facebook.com/jp.jp.7127", "_blank")
                }
              >
                {" "}
                <img src={Bride} alt="" />{" "}
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    Thu Phương <i className="ti-heart"></i>
                  </h6>{" "}
                  <span>Cô dâu</span>
                  <p>
                    Người con của núi rừng Tây Bắc. Thấm nhuần tư tưởng "Người
                    miền núi Chất"
                  </p>
                  {/* <div className="social">
                    <div className="full-width">
                      <a href="#0" className="icon">
                        <img src={Facebook} alt="" />{" "}
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="item mb-30 animate-box"
              data-animate-effect="fadeInRight"
              style={{ height: "100%" }}
            >
              <div
                className="img"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/oca.cuonggosu",
                    "_blank"
                  )
                }
              >
                {" "}
                <img src={Groom} alt="" />{" "}
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    Phạm Cường <i className="ti-heart"></i>
                  </h6>{" "}
                  <span>Chú rể</span>
                  <p>
                    Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong
                    khi yêu ai đó sâu sắc sẽ mang lại cho bạn dũng khí. Từ hôm
                    nay em chính là sức mạnh và cũng là dũng khí của anh
                  </p>
                  {/* <div className="social">
                    <div className="full-width">
                      <a href="#0" className="icon">
                        <img src={Facebook} alt="" />{" "}
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 text-center animate-box"
            data-animate-effect="fadeInUp"
          >
            <h3 className="oliven-couple-title">Are getting married!</h3>
            <h4 className="oliven-couple-subtitle">
              17 tháng 3 năm 2024 – Hải Dương
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
