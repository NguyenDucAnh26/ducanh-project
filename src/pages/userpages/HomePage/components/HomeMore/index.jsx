import * as S from "./styles";
import { Col, Row } from "antd";

function HomeMore() {
  return (
    <S.HomeMoreContainer>
      <S.HomePageMoreCaption>
        <marquee>
          CoolClub - Ưu đãi nhiều hơn, mua sắm vui hơn. Nhận ngay ưu đãi 7% cho
          lần mua sắm tiếp theo
        </marquee>
        <S.LinkCaption>Gia nhập ngay</S.LinkCaption>
      </S.HomePageMoreCaption>

      <S.HomePageMoreImages>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" lg={12} sm={24} xs={24}>
            <a>
              <S.ImageContainer>
                <S.Image src="https://mcdn.coolmate.me/uploads/November2021/image1_59.jpg"></S.Image>
              </S.ImageContainer>
            </a>
          </Col>
          <Col className="gutter-row" lg={12} sm={24} xs={24}>
            <a>
              <S.ImageContainer>
                <S.Image src="https://mcdn.coolmate.me/uploads/November2021/image2.jpg"></S.Image>
              </S.ImageContainer>
            </a>
          </Col>
        </Row>
      </S.HomePageMoreImages>
    </S.HomeMoreContainer>
  );
}

export default HomeMore;
