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
            <h6 className="title">Trao nhẫn cưới</h6>
            <p>
              Chúng tôi sẽ tiến hành trao nhẫn cho nhau dưới sự chứng kiến của
              quan viên hai họ.
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">03</h2>
            <h6 className="title">Rót rượu</h6>
            <p>
              Tháp rượu tràn ly mang ý nghĩa mong muốn hạnh phúc sẽ tràn đầy,
              màu đỏ của rượu cũng là tượng trưng cho may mắn và cho tình yêu
              sâu đậm của chúng tôi
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">04</h2>
            <h6 className="title">Cắt bánh</h6>
            <p>
              Chúng tôi sẽ cùng nhau cắt chiếc bánh cưới để thể hiện sự đồng
              lòng, chung sức, cùng nhau vượt qua mọi khó khăn, thử thách trong
              cuộc sống.
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">05</h2>
            <h6 className="title">Tặng quà</h6>
            <p>
              Người thân và bạn bè thân thiết của chúng tôi sẽ tặng những món
              quà chúc mừng chúng tôi, cũng như chúc phúc cho tình yêu của chúng
              tôi.
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">06</h2>
            <h6 className="title">Bữa tiệc</h6>
            <p>
              Mời các bạn thưởng thức hương vị đặc trưng của các món ăn của quê
              hương chúng tôi.
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">07</h2>
            <h6 className="title">Chụp ảnh</h6>
            <p>
              Chúng ta hãy cùng nhau lưu giữ những khoảnh khắc đẹp nhất trong lễ
              cưới của chúng tôi. Đừng quên chuẩn bị trang phục đẹp nhất nhé!
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">08</h2>
            <h6 className="title">Tung hoa</h6>
            <p>
              Chúng tôi sẽ tung boá hoa cưới của chung tôi để trao gửi niềm hạnh
              phúc tới những người còn độc thân, đặc biệt là các cô gái, mong
              muốn họ sẽ tìm thấy tình yêu đích thực trong cuộc đời mình.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
