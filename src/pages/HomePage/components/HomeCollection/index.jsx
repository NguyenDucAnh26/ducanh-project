import { Col, Row } from "antd";
import * as S from "./styles";

function HomeCollection() {
  return (
    <S.CollectionContainer>
      <S.CollectionWrapper>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" lg={6} sm={12} xs={12}>
            <a>
              <S.CollectionThumbnail>
                <S.CollectionThumbnailImage src="https://mcdn.coolmate.me/image/June2022/mceclip0_43.jpg" />
                <S.CollectionThumbnailTitle>
                  Đồ mặc trong
                </S.CollectionThumbnailTitle>
              </S.CollectionThumbnail>
            </a>
          </Col>
          <Col className="gutter-row" lg={6} sm={12} xs={12}>
            <a>
              <S.CollectionThumbnail>
                <S.CollectionThumbnailImage src="https://mcdn.coolmate.me/image/June2022/mceclip0_99.jpg" />
                <S.CollectionThumbnailTitle>
                  Mặc hàng ngày
                </S.CollectionThumbnailTitle>
              </S.CollectionThumbnail>
            </a>
          </Col>
          <Col className="gutter-row" lg={6} sm={12} xs={12}>
            <a>
              <S.CollectionThumbnail>
                <S.CollectionThumbnailImage src="https://mcdn.coolmate.me/image/June2022/mceclip1_56.jpg" />

                <S.CollectionThumbnailTitle>
                  Đồ thể thao
                </S.CollectionThumbnailTitle>
              </S.CollectionThumbnail>
            </a>
          </Col>
          <Col className="gutter-row" lg={6} sm={12} xs={12}>
            <a>
              <S.CollectionThumbnail>
                <S.CollectionThumbnailImage src="https://mcdn.coolmate.me/image/June2022/mceclip1_61.jpg" />
                <S.CollectionThumbnailTitle>Tất cả</S.CollectionThumbnailTitle>
              </S.CollectionThumbnail>
            </a>
          </Col>
        </Row>
      </S.CollectionWrapper>
    </S.CollectionContainer>
  );
}

export default HomeCollection;
