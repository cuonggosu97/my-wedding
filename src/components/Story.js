import React from "react";
import storyImage from "../assets/images/story.png";
function Story() {
  return (
    <div id="story" className="story section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-30">
            <div className="story-img animate-box">
              <div className="img">
                {" "}
                <img src={storyImage} className="img-fluid" alt="" />{" "}
              </div>
              <div className="story-img-2 story-wedding"></div>
            </div>
          </div>
          <div className="col-md-7 animate-box">
            <h4 className="oliven-story-subtitle">Tình yêu của chúng tôi</h4>
            <h3 className="oliven-story-title">Câu chuyện của chúng tôi</h3>
            <p>
              Có những người được số phận sắp đặt để gặp nhau. Dù họ có ở đâu,
              có đi đâu chăng nữa. Một ngày nào đó họ sẽ gặp nhau.
            </p>
            <p>
              Chúng mình gặp và quen nhau rất bất ngờ tại một căn nhà cho thuê,
              hai đứa cạnh phòng lườm nguýt, chí choé nhau suốt ngày ấy thế mà
              vẫn nấu cơm mời nhau sang ăn cùng cho vui. Có khi ăn thấy hợp khẩu
              vị quá nên quyết định yêu nhau luôn 😅
            </p>
            <p>
              Chúng mình đã đồng hành cùng nhau từ khi còn là những cô cậu sinh
              viên, đã trải nghiệm cuộc sống, trải nghiệm tình yêu,... Những sự
              trải nghiệm mới mẻ đem lại cảm giác rất khác. Tình yêu và cuộc
              sống không chỉ tươi tắn, ngọt ngào, hồng rực rỡ mà nó còn thêm các
              dư vị cuộc sống khác như cay, đắng, mặn, chát,...
            </p>
            <h4>21 tháng 1 năm 2024, Cô ấy đồng ý!</h4>
            <p>
              Thật hạnh phúc khi hai đứa đã cùng nắm tay trải qua hết và ở cạnh
              nhau đến tận bây giờ. Tình yêu cần lòng bao dung, tha thứ và hy
              sinh, những điều ấy mới giúp tình yêu bền vững.
            </p>
            <h4>Cảm ơn vì chúng mình vẫn luôn có nhau❤️</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
