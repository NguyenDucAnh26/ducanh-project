import { Typography, Tabs, Col, Row } from "antd";
import * as S from "./style";
import ProductCard from "../../../../layouts/ProductCard";
const { Title } = Typography;
const { TabPane } = Tabs;
function HomeProduct() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <S.HomeProductContainer>
      <S.HomeProductWrapper>
        <Title
          style={{
            textAlign: "center",
          }}
          level={2}
        >
          Cần phải có
        </Title>

        <S.TabContainer>
          {/* TAB */}
          <Tabs
            style={{ textAlign: "center" }}
            centered
            defaultActiveKey="1"
            onChange={onChange}
          >
            <TabPane tab="Mặc hàng ngày" key="1">
              <Row gutter={[16, 24]}>
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
            </TabPane>
            <TabPane tab="  Quần lót nam" key="2">
              <Row gutter={[16, 24]}>
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
            </TabPane>
            <TabPane tab="Đồ thể thao" key="3">
              <Row gutter={[16, 24]}>
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
            </TabPane>
          </Tabs>
        </S.TabContainer>
      </S.HomeProductWrapper>
    </S.HomeProductContainer>
  );
}

export default HomeProduct;
