import * as S from "./styles";
import { Col, Row } from "antd";
import ProductCard from "../../../../layouts/ProductCard";

function CollectionList() {
  return (
    <S.CollectionList>
      <S.CollectionListContainer>
        <S.CollectionTitle>
          <S.TitleName>Áo thun nam giới</S.TitleName>
          <S.LinkTitle>Xem tất cả</S.LinkTitle>
        </S.CollectionTitle>
        <S.CollectionProducts>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              {/* heading */}
              <S.ProductCategoryHead>
                <S.ProductCategoryThumbnail>
                  <S.Thumbnail
                    src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/Ao_thun_08.jpg"
                    alt="headcategory"
                  />
                </S.ProductCategoryThumbnail>
              </S.ProductCategoryHead>
            </Col>
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              <ProductCard />
            </Col>
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              <ProductCard />
            </Col>
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              <ProductCard />
            </Col>

            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              <ProductCard />
            </Col>
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              <ProductCard />
            </Col>
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              <ProductCard />
            </Col>
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              <ProductCard />
            </Col>
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              <ProductCard />
            </Col>
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              <ProductCard />
            </Col>
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              <ProductCard />
            </Col>
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              <ProductCard />
            </Col>
          </Row>
        </S.CollectionProducts>
      </S.CollectionListContainer>
    </S.CollectionList>
  );
}

export default CollectionList;
