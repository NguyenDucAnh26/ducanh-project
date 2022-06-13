import { Card, Form, Radio } from "antd";
import { StarFilled } from "@ant-design/icons";
import * as S from "./styles";
const { Meta } = Card;
function ProductCard() {
  function ProductName() {
    return (
      <S.ProductNameWarpper>
        <S.ProductNameContent>
          <a href="/">Áo polo nam công nghệ khử mùi Anti-Smell</a>
        </S.ProductNameContent>
      </S.ProductNameWarpper>
    );
  }
  function ProductPrice() {
    return (
      <>
        <S.ProductPriceWarpper>
          <S.ProductPrice>200.000đ</S.ProductPrice>
          <S.ProductNewPrice>300.000đ</S.ProductNewPrice>
          <S.ProductPriceSale>-30%</S.ProductPriceSale>
        </S.ProductPriceWarpper>
        {/* star rating */}
        <ProductRateStar />
      </>
    );
  }

  function ProductRateStar() {
    return (
      <S.StarWrapper>
        <S.StarGrid>
          <S.StarProduct>
            <StarFilled />
          </S.StarProduct>
          <S.StarProduct>
            <StarFilled />
          </S.StarProduct>
          <S.StarProduct>
            <StarFilled />
            <S.StarProduct>
              <StarFilled />
            </S.StarProduct>
            <S.StarProduct>
              <StarFilled />
            </S.StarProduct>
          </S.StarProduct>
          <S.RateNumbers>(22)</S.RateNumbers>
        </S.StarGrid>
      </S.StarWrapper>
    );
  }

  return (
    <Card
      style={{
        width: 240,
      }}
      cover={
        <S.ProductImgWrapper>
          <S.ProductImgLink />
          <S.ProductImg
            id="img-contain"
            src="https://media.coolmate.me/cdn-cgi/image/width=450,height=663,quality=100/uploads/May2022/polo-anti-navy_15_copy_7.jpg"
            alt="coomate"
          />
          <S.ProductImgHover
            id="img-hover"
            src="https://media.coolmate.me/cdn-cgi/image/width=450,height=663,quality=100/uploads/April2022/polo-anti-trang_76.jpg"
            alt="coomate"
          />
          <S.SizeProduct id="show-size">
            <Form.Item name="radio-button">
              <Radio.Group
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Radio.Button
                  name="radio-button"
                  className="size-product-btn"
                  value="a"
                >
                  S
                </Radio.Button>
                <Radio.Button
                  name="radio-button"
                  className="size-product-btn"
                  value="b"
                >
                  M
                </Radio.Button>
                <Radio.Button
                  name="radio-button"
                  className="size-product-btn"
                  value="c"
                >
                  L
                </Radio.Button>
                <Radio.Button
                  name="radio-button"
                  className="size-product-btn"
                  value="d"
                >
                  XL
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </S.SizeProduct>
        </S.ProductImgWrapper>
      }
    >
      <Meta title={<ProductName />} description={<ProductPrice />} />
    </Card>
  );
}

export default ProductCard;
