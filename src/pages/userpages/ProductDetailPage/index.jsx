import React from "react";
import * as S from "./styles";
import "./custom.css";
import { ROUTES } from "../../../constants/routes";
import { PAGE_SIZE } from "../../../constants/pagination";
import {
  HomeOutlined,
  ShoppingOutlined,
  CheckOutlined,
  PlusOutlined,
  StarFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import {
  Comment,
  Rate,
  Divider,
  Collapse,
  Col,
  Row,
  Button,
  Breadcrumb,
  Radio,
  Typography,
  Form,
  InputNumber,
  notification,
  Skeleton,
  Spin,
  Card,
  Input,
  Image,
  Pagination,
} from "antd";
import Slider from "react-slick";
import ProductCardDetail from "../../../layouts/UserLayout/ProductCardDetail";
import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
  createCartAction,
  getColorListAction,
  getProductDetailAction,
  getProductImagesListAction,
  getVariantListAction,
  getCommentListAction,
  sendCommentAction,
  getViewedProducts,
  getProductListUserAction,
} from "../../../redux/actions";
const { Panel } = Collapse;
const { Title } = Typography;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const settings2 = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  nextArrow: <SampleNextArrow style={{ color: "black" }} />,
  prevArrow: <SamplePrevArrow style={{ color: "black" }} />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
const text = (
  <span
    style={{
      fontSize: "14px",
      fontWeight: "500",
    }}
  >
    <CheckOutlined
      style={{
        marginRight: "10px",
      }}
    />
    Ch???t li???u: 100% Polyester
    <br />
    <br />
    <CheckOutlined
      style={{
        marginRight: "10px",
      }}
    />
    C??ng ngh??? x??? l?? ho??n thi???n v???i: Quick-Dry (nhanh kh??) v?? Wicking (th???m h??t
    nhanh)
    <br />
    <br />
    <CheckOutlined
      style={{
        marginRight: "10px",
      }}
    />
    V???i ???????c d???t v?? nhu???m theo quy tr??nh kh??ng n?????c th???i
    <br />
    <br />
    <CheckOutlined
      style={{
        marginRight: "10px",
      }}
    />
    Kh??ng nh??n v?? t???o c???m gi??c tho??ng m??t khi v???n ?????ng
    <br />
    <br />
    <CheckOutlined
      style={{
        marginRight: "10px",
      }}
    />
    T??? h??o s???n xu???t t???i Vi???t Nam
    <br />
    <br />
    <CheckOutlined
      style={{
        marginRight: "10px",
      }}
    />
    Ng?????i m???u: 1m80 - 75kg, m???c 2XL
  </span>
);

function ProductDetailPage() {
  const sliderRef = useRef();
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const openNotificationWithIcon = () => {
    notification.success({
      message: "Th??m v??o gi??? h??ng th??nh c??ng",
      description: "Mua s???m vui v???",
    });
  };
  const [colorSelected, setColorSelected] = useState();
  const [sizeSelected, setSizeSelected] = useState("");
  const [visible, setVisible] = useState(false);
  const [amountSelected, setAmountSelected] = useState(1);
  const [opacity, setOpacity] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { state } = useLocation();

  const { productDetail, viewedProducts } = useSelector(
    (state) => state.product
  );

  const { variantList } = useSelector((state) => state.variant);
  const { productListUser } = useSelector((state) => state.product);
  const { commentList } = useSelector((state) => state.comment);
  const { userInfo } = useSelector((state) => state.user);
  const { colorList } = useSelector((state) => state.color);
  const { productImagesList } = useSelector((state) => state.productImages);

  useEffect(() => {
    dispatch(getVariantListAction());
    dispatch(getColorListAction({ limit: 100 }));
    dispatch(getProductImagesListAction());
    dispatch(getViewedProducts());
    dispatch(getProductListUserAction({}));
  }, []);
  useEffect(() => {
    dispatch(getProductDetailAction({ id: id }));
    dispatch(
      getCommentListAction({ productId: id, page: 1, limit: PAGE_SIZE.SUPMINI })
    );
    // eslint-disable-next-line reacreatct-hooks/exhaustive-deps
  }, [id]);

  let totalRate = 0;
  commentList.data.forEach((item) => {
    totalRate += item.rate;
  });
  let totalRateAverage = totalRate / commentList.data.length;

  // pagination  change
  function handleChanglePage(page) {
    dispatch(
      getCommentListAction({
        page: page,
        limit: PAGE_SIZE.SUPMINI,
      })
    );
  }

  const handleSendComment = (values) => {
    dispatch(
      sendCommentAction({
        data: {
          productId: parseInt(id),
          productName: productDetail.data.name,
          productImg: imagesFilter[0].url,
          userId: userInfo.data.id,
          content: values.content,
          rate: values.rate,
        },
      })
    );
  };

  const handleOnClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setOpacity(true);
  };

  const colorFilter = colorList.data.filter(
    (item) => item.productId === productDetail.data.id
  );

  const imagesFilter = productImagesList.data.filter(
    (item) =>
      item.productId === productDetail.data.id &&
      item.color ===
        (colorSelected
          ? colorSelected
          : state
          ? state
          : colorFilter.length !== 0
          ? colorFilter[0].color
          : "")
  );

  const variantFilter = variantList.data.filter(
    (item) =>
      item.productId === productDetail.data.id &&
      item.color ===
        (colorSelected
          ? colorSelected
          : state
          ? state
          : colorFilter.length !== 0
          ? colorFilter[0].color
          : "")
  );

  const renderVariantSize = variantFilter.map((item) => {
    return (
      <Radio.Button
        key={item.id}
        className="custom-button-detail-size"
        value={item.size}
      >
        <S.SizeButton>{item.size.toUpperCase()}</S.SizeButton>
      </Radio.Button>
    );
  });

  const renderColorsRadio = colorFilter.map((item) => {
    return (
      <Radio.Button
        key={item.id}
        value={item.color}
        className="custom-button-detail-color"
      >
        <S.ImgRadio src={item.url} />
      </Radio.Button>
    );
  });

  const renderComments = commentList.data.map((item) => {
    return (
      <Col key={item.id} lg={12} sm={12} xs={24}>
        <Comment
          datetime={
            <span>
              {`
            ${moment(item.createdAt).fromNow()}`}
            </span>
          }
          author={item.user.fullName}
          actions={[
            <span>
              <Rate disabled defaultValue={item.rate} />
            </span>,
          ]}
          content={<p style={{ lineHeight: "22px" }}>{item.content}</p>}
        />
        <Divider />
      </Col>
    );
  });

  const imagesDetail = imagesFilter.map((item) => {
    return (
      <S.ProductImages onClick={() => setVisible(true)} key={item.id}>
        <S.productImg src={item.url} alt={item.id} />
      </S.ProductImages>
    );
  });

  const imagesDetailSub = imagesFilter.map((item, index) => {
    return (
      <S.ImageOfListWrapper
        isOpacity={opacity}
        onClick={() => handleOnClick(index)}
        key={item.id}
      >
        <S.ImageOfList src={item.url} alt={item.id} />
      </S.ImageOfListWrapper>
    );
  });

  const price = productDetail.data.price ? productDetail.data.price : 0;

  const PriceProduct = price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });

  function handleAddProduct() {
    const variantProductCart = variantFilter.filter(
      (item) => item.size === sizeSelected
    );
    dispatch(
      createCartAction({
        data: {
          size: variantProductCart[0].size,
          color: variantProductCart[0].color,
          price: productDetail.data.price,
          name: productDetail.data.name,
          amount: amountSelected,
          variantId: variantProductCart[0].id,
          image: imagesFilter[0].url,
        },
      })
    );
    openNotificationWithIcon();
  }

  const ProductListSameCategory = productListUser.data.filter(
    (item) => item.categoryId === productDetail.data.categoryId
  );
  const renderViewedProducts = useMemo(() => {
    return viewedProducts.data.map((item, index) => {
      return (
        <S.CardWrapper key={item.id}>
          <ProductCardDetail data={item} />
        </S.CardWrapper>
      );
    });
  }, [viewedProducts]);

  return (
    <S.ProductDetail>
      <S.ProductDetailContainer>
        <S.BreadcrumbContainer>
          <Breadcrumb className="detail-breadcrumb">
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <span>Collection</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {productDetail.data.category
                ? productDetail.data.category.name
                : ""}
            </Breadcrumb.Item>
          </Breadcrumb>
        </S.BreadcrumbContainer>
        <S.DetailMain>
          <S.ProductImgWrapper>
            <Slider ref={sliderRef}>
              {productDetail.loading ? (
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{ fontSize: "40px", color: "black" }}
                    />
                  }
                  size="large"
                  style={{ marginLeft: "50%", marginTop: "10%" }}
                />
              ) : (
                imagesDetail
              )}
            </Slider>

            <div
              style={{
                display: "none",
              }}
            >
              <Image.PreviewGroup
                preview={{
                  visible,
                  onVisibleChange: (vis) => setVisible(vis),
                }}
              >
                {imagesFilter.map((item) => {
                  return <Image key={item.id} src={item.url} />;
                })}
              </Image.PreviewGroup>
            </div>
            <S.ListImage>{imagesDetailSub}</S.ListImage>
          </S.ProductImgWrapper>

          <S.ProductContent>
            <Title level={2}>
              {productDetail.loading ? (
                <Skeleton.Input block size="small" />
              ) : (
                productDetail.data.name
              )}
            </Title>
            <S.ProductPriceWarpper>
              <S.ProductPrice>
                {productDetail.loading ? (
                  <Skeleton.Input block size="small" />
                ) : (
                  PriceProduct
                )}
              </S.ProductPrice>
              <S.ProductNewPrice>300.000??</S.ProductNewPrice>
              <S.ProductPriceSale>-30%</S.ProductPriceSale>
            </S.ProductPriceWarpper>
            <S.FormProduct>
              <Form>
                <Form.Item>
                  <S.ColorShow>
                    <S.PickTitle>M??u s???c:</S.PickTitle>
                    <S.ShowTitleContent>
                      {productDetail.loading ? (
                        <Skeleton.Input block size="small" />
                      ) : colorSelected ? (
                        colorSelected.charAt(0).toUpperCase() +
                        colorSelected.slice(1)
                      ) : state ? (
                        state.charAt(0).toUpperCase() + state.slice(1)
                      ) : colorFilter.length !== 0 ? (
                        colorFilter[0].color
                      ) : (
                        ""
                      )}
                    </S.ShowTitleContent>
                  </S.ColorShow>
                  <Radio.Group
                    defaultValue={state}
                    onChange={(e) => setColorSelected(e.target.value)}
                  >
                    {productDetail.loading ? (
                      <Skeleton.Input block />
                    ) : (
                      renderColorsRadio
                    )}
                  </Radio.Group>
                </Form.Item>

                <Form.Item>
                  <S.SizeShow>
                    <S.PickTitle>K??ch th?????c:</S.PickTitle>
                    <S.ShowTitleContent>
                      {productDetail.loading ? (
                        <Skeleton.Input block size="small" />
                      ) : (
                        sizeSelected.toUpperCase()
                      )}
                    </S.ShowTitleContent>
                  </S.SizeShow>
                  <Radio.Group
                    onChange={(e) => {
                      setSizeSelected(e.target.value);
                    }}
                  >
                    {productDetail.loading ? (
                      <Skeleton.Input block />
                    ) : (
                      renderVariantSize
                    )}
                  </Radio.Group>
                </Form.Item>
                <Form.Item>
                  <S.GridRow>
                    <InputNumber
                      style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                      }}
                      onChange={(value) => {
                        setAmountSelected(value);
                      }}
                      defaultValue={1}
                    />
                    <Button
                      disabled={sizeSelected === "" ? true : false}
                      onClick={() => handleAddProduct()}
                      className="btn"
                      icon={<ShoppingOutlined />}
                      style={{
                        flex: 1,
                        backgroundColor: "black",
                        color: "white",
                        marginLeft: "20px",
                        borderRadius: "20px",
                        height: "40px",
                      }}
                    >
                      <span style={{ color: "white" }}>
                        {sizeSelected === ""
                          ? "Ch???n bi???n th???"
                          : "Th??m v??o gi??? h??ng"}
                      </span>
                    </Button>
                  </S.GridRow>
                </Form.Item>
              </Form>
            </S.FormProduct>
            <S.BonusContent>
              <Row gutter={[16, 24]}>
                <Col lg={8} sm={8} xs={8}>
                  <S.BonusWrapper>
                    <S.BonusIcon>
                      <S.IconImg
                        src="https://www.coolmate.me/images/icons/icon3.svg"
                        alt="Coolmate"
                      />
                    </S.BonusIcon>
                    <S.BonusDes>
                      ?????i tr??? c???c d???
                      <br />
                      ch??? c???n s??? ??i???n tho???i
                    </S.BonusDes>
                  </S.BonusWrapper>
                </Col>
                <Col lg={8} sm={8} xs={8}>
                  <S.BonusWrapper>
                    <S.BonusIcon>
                      <S.IconImg
                        src="https://www.coolmate.me/images/icons/icon4.svg"
                        alt="Coolmate"
                      />
                    </S.BonusIcon>
                    <S.BonusDes>
                      Mi???n ph?? v???n chuy???n
                      <br />
                      cho ????n h??ng tr??n 99k
                    </S.BonusDes>
                  </S.BonusWrapper>
                </Col>
                <Col lg={8} sm={8} xs={8}>
                  <S.BonusWrapper>
                    <S.BonusIcon>
                      <S.IconImg
                        src="https://www.coolmate.me/images/icons/icon5.svg"
                        alt="Coolmate"
                      />
                    </S.BonusIcon>
                    <S.BonusDes>
                      60 ng??y ?????i tr???
                      <br />
                      v?? b???t k??? l?? do g??
                    </S.BonusDes>
                  </S.BonusWrapper>
                </Col>
                <Col lg={8} sm={8} xs={8}>
                  <S.BonusWrapper>
                    <S.BonusIcon>
                      <S.IconImg
                        src="https://www.coolmate.me/images/icons/icon2.svg"
                        alt="Coolmate"
                      />
                    </S.BonusIcon>
                    <S.BonusDes>
                      Hotline 1900.27.27.37
                      <br />
                      h??? tr??? t??? 8h30 - 22h m???i ng??y
                    </S.BonusDes>
                  </S.BonusWrapper>
                </Col>
                <Col lg={8} sm={8} xs={8}>
                  <S.BonusWrapper>
                    <S.BonusIcon>
                      <S.IconImg
                        src="https://www.coolmate.me/images/icons/icon1.svg"
                        alt="Coolmate"
                      />
                    </S.BonusIcon>
                    <S.BonusDes>
                      ?????n t???n n??i nh???n h??ng tr???,
                      <br />
                      ho??n ti???n trong 24h
                    </S.BonusDes>
                  </S.BonusWrapper>
                </Col>
                <Col lg={8} sm={8} xs={8}>
                  <S.BonusWrapper>
                    <S.BonusIcon>
                      <S.IconImg
                        src="https://www.coolmate.me/images/icons/icon6.svg"
                        alt="Coolmate"
                      />
                    </S.BonusIcon>
                    <S.BonusDes>
                      Giao h??ng nhanh to??n
                      <br />
                      qu???c
                    </S.BonusDes>
                  </S.BonusWrapper>
                </Col>
              </Row>
            </S.BonusContent>

            <S.OutstandContent>
              <Collapse
                expandIcon={({ isActive }) => (
                  <PlusOutlined
                    style={{
                      fontSize: "18px",
                    }}
                    rotate={isActive ? 135 : 0}
                  />
                )}
                ghost
              >
                <Panel
                  header={
                    <h2
                      style={{
                        lineHeight: "20px",
                        fontSize: "18px",
                      }}
                    >
                      ?????c ??i???m n???i b???t
                    </h2>
                  }
                >
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </S.OutstandContent>
          </S.ProductContent>
        </S.DetailMain>
        <Divider />
        <S.AboutProduct>
          <Title level={2}>Chi ti???t s???n ph???m</Title>
          <S.AboutContent>
            Coolmate ???? cho ra m???t r???t nhi???u s???n ph???m th??? thao v???i nhi???u ch???t
            li???u: Maxcool, Poly Quickdry,... Ti???p n???i nh???ng s???n ph???m th??? thao
            tr?????c ???? v?? ??i theo xu h?????ng ng??nh may m???c "th???i trang b???n v???ng",
            Coolmate ra m???t s???n ph???m Qu???n th??? thao nam 5 Inch Recycle th??n thi???n
            v???i m??i tr?????ng v???i th??nh ph???n ch??nh l?? 100% s???i Recycle. C??ng t??m
            hi???u v?? sao chi???c qu???n th??? thao Recycle n??y l?? s???n ph???m m?? ch??ng t??i
            mu???n g???i ?????n kh??ch h??ng.
          </S.AboutContent>
          <S.AboutImage src="https://mcdn.coolmate.me/image/April2022/5inch2.jpg" />
        </S.AboutProduct>
        <Divider />
        <S.PreviewProduct>
          <Card
            style={{
              margin: "30px 0",
              borderRadius: "20px",
              boxShadow:
                " rgb(0 0 0 / 16%) 0px 1px 4px, rgb(51 51 51) 0px 0px 0px 3px",
            }}
            size="small"
          >
            {accessToken ? (
              <Form
                name="commentForm"
                onFinish={(values) => handleSendComment(values)}
              >
                <Form.Item name="rate" label="????nh gi??">
                  <Rate allowHalf />
                </Form.Item>
                <Form.Item name="content">
                  <Input.TextArea
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #151515",
                    }}
                    placeholder="b??nh lu???n ??? ????y n?? b???n ??i..."
                    autoSize={{ minRows: 2, maxRows: 6 }}
                  />
                </Form.Item>
                <Button className="btn-comment" htmlType="submit">
                  G???i
                </Button>
              </Form>
            ) : (
              <div
                style={{
                  fontSize: "16px",
                  textAlign: "center",
                  width: "100%",
                  fontWeight: "500",
                }}
              >
                b???n c???n ????ng nh???p ????? ????nh gi?? s???n ph???m
                <S.ClickLogIn onClick={() => navigate(ROUTES.LOGIN)}>
                  ????ng nh???p
                </S.ClickLogIn>
              </div>
            )}
          </Card>
          <S.PreviewTitle>
            <div style={{ marginRight: "20px" }}>
              <Title level={3}>
                {commentList.data.length ? commentList.data.length : 0} ????nh gi??
              </Title>
            </div>
            <div>
              <Title level={3}>
                {commentList.data.length ? totalRateAverage : 0}/5
                <StarFilled style={{ color: "black" }} />
              </Title>
            </div>
          </S.PreviewTitle>

          <Row gutter={[16, 24]}>
            {commentList.data.length === 0 ? (
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ch??a c?? ????nh gi??
              </p>
            ) : (
              renderComments
            )}
          </Row>
          <Pagination
            size="small"
            className="pagination-detail-comment"
            style={{
              textAlign: "center",
            }}
            pageSize={PAGE_SIZE.SUPMINI}
            current={commentList.meta.page}
            total={commentList.meta.total}
            onChange={(page) => {
              handleChanglePage(page);
            }}
          />
        </S.PreviewProduct>
        <Divider />
        <S.SuggestProductsContainer>
          <S.ProductSameCategory>
            <S.TitleProducts>S???n ph???m c??ng lo???i</S.TitleProducts>
            <Slider {...settings2}>
              {productListUser.data &&
                ProductListSameCategory.map((item, index) => {
                  if (ProductListSameCategory.length >= 5) {
                    return (
                      <S.CardWrapper key={item.id}>
                        <ProductCardDetail data={item} />
                      </S.CardWrapper>
                    );
                  }
                  return null;
                })}
            </Slider>
          </S.ProductSameCategory>
          <Divider />
          <S.ProductsSave>
            {viewedProducts.data.length !== 0 && (
              <S.TitleProducts>S???n ph???m ???? xem g???n ????y</S.TitleProducts>
            )}
            <Slider {...settings2}>
              {viewedProducts.data.length >= 5 && renderViewedProducts}
            </Slider>
          </S.ProductsSave>
        </S.SuggestProductsContainer>
      </S.ProductDetailContainer>
    </S.ProductDetail>
  );
}

export default ProductDetailPage;
