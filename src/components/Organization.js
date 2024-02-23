import React from "react";

function Organization() {
  console.log(
    window.innerWidth <= 768 ? "images/slider3.jpg" : "images/slider.jpg"
  );
  return (
    <div id="organization" className="organization section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Wedding</span>
            <h2 className="oliven-title">Sự kiện</h2>
          </div>
        </div>
        <div
          className="row bord-box bg-img"
          data-background={
            window.innerWidth <= 768
              ? "images/slider3.jpg"
              : "images/slider.jpg"
          }
        >
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">01</h2>
            <h6 className="title">Hát</h6>
            <p>
              Chúng tôi sẽ tặng mọi người một ca khúc mashup về tình yêu của
              chúng tôi tại quê hương của cô dâu. Đừng bỏ lỡ nhé!
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">02</h2>
            <h6 className="title">Rót rượu</h6>
            <p>
              Tháp rượu tràn ly mang ý nghĩa mong muốn hạnh phúc sẽ tràn đầy,
              màu đỏ của rượu cũng là tượng trưng cho may mắn và cho tình yêu
              sâu đậm của chúng tôi
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">03</h2>
            <h6 className="title">Bữa tiệc</h6>
            <p>
              Mời các bạn thưởng thức hương vị đặc trưng của các món ăn của quê
              hương chúng tôi.
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">04</h2>
            <h6 className="title">Cake Cutting</h6>
            <p>
              Delta tristiu the jusone duise vitae diam neque nivami mis est
              augue artine aringilla the at elit finibus vivera.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
