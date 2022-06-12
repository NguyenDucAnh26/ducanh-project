import { Form, Input, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import * as S from "./styles";
const { TabPane } = Tabs;

export const MenuMobile = ({ setIsShowMenuMobile, isShowMenuMobile }) => {
  return (
    <S.MenuContainer isShowMenuMobile={isShowMenuMobile}>
      <S.MenuWrapper>
        <S.MenuInner>
          <S.SearchWrapper>
            <S.SearchMobile>
              <Form>
                <Form.Item>
                  <Input
                    placeholder="Tìm kiếm sản phẩm..."
                    prefix={<SearchOutlined />}
                    style={{
                      width: "100%",
                      border: "1px solid black",
                      borderRadius: "50px",
                    }}
                  />
                </Form.Item>
              </Form>
            </S.SearchMobile>
          </S.SearchWrapper>
          <S.MenuMainWrapper>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Sản phẩm" key="1">
                <p
                  style={{
                    borderBottom: "1px solid #aaa",
                    marginBottom: "10px",
                  }}
                >
                  Tất cả sản phẩm
                </p>
                {/* áo nam */}
                <S.Lists>
                  <S.ListHead>
                    <a>Áo nam</a>
                  </S.ListHead>
                  <li>
                    <a>Tất cả áo nam</a>
                  </li>
                  <li>
                    <a>Áo Tank top</a>
                  </li>
                  <li>
                    <a>Áo T-shirt</a>
                  </li>
                  <li>
                    <a>Áo polo</a>
                  </li>
                  <li>
                    <a>Áo sơ mi</a>
                  </li>
                  <li>
                    <a>Áo thể thao</a>
                  </li>
                  <li>
                    <a>Áo in hình</a>
                  </li>
                  <li>
                    <a>Áo khoác thể thao</a>
                  </li>
                </S.Lists>
                {/* quần nam */}
                <S.Lists>
                  <S.ListHead>
                    <a>Quần nam</a>
                  </S.ListHead>
                  <li>
                    <a>Tất cả quần nam</a>
                  </li>
                  <li>
                    <a>Quần lót nam</a>
                  </li>
                  <li>
                    <a>Quần shorts</a>
                  </li>
                  <li>
                    <a>Quần jeans</a>
                  </li>
                  <li>
                    <a>Quần dài</a>
                  </li>
                </S.Lists>
                {/* phụ kiện */}
                <S.Lists>
                  <S.ListHead>
                    <a>Phụ kiện</a>
                  </S.ListHead>
                  <li>
                    <a>Tất cả phụ kiện</a>
                  </li>
                  <li>
                    <a>Tất (vớ)</a>
                  </li>
                  <li>
                    <a>Phụ kiện</a>
                  </li>
                </S.Lists>
              </TabPane>
              <TabPane tab="Bộ sưu tập" key="2">
                <ul>
                  <S.ListMegaItem>
                    <S.Link>
                      Coolmate Basics
                      <S.SubLink>BST giá rẻ - chất lượng</S.SubLink>
                    </S.Link>
                  </S.ListMegaItem>
                  <S.ListMegaItem>
                    <S.Link>
                      Care & Share
                      <S.SubLink>10% doanh thu dành cho các bé</S.SubLink>
                    </S.Link>
                  </S.ListMegaItem>
                </ul>
              </TabPane>
              <TabPane tab="Nhu cầu" key="3">
                <ul>
                  <S.ListMegaItem>
                    <S.Link>
                      Mặt nhà & Mặc trong
                      <S.SubLink>Homewear & Underwear</S.SubLink>
                    </S.Link>
                  </S.ListMegaItem>
                  <S.ListMegaItem>
                    <S.Link>
                      Mặc hàng ngày
                      <S.SubLink>Casualwear</S.SubLink>
                    </S.Link>
                  </S.ListMegaItem>
                  <S.ListMegaItem>
                    <S.Link>
                      Đồ thể thao
                      <S.SubLink>Activewear</S.SubLink>
                    </S.Link>
                  </S.ListMegaItem>
                </ul>
              </TabPane>
              <TabPane tab="Công nghệ" key="4">
                <ul>
                  <S.ListMegaItem>
                    <S.Link>
                      Excool
                      <S.SubLink>Công nghệ làm mát tối đa</S.SubLink>
                    </S.Link>
                  </S.ListMegaItem>
                  <S.ListMegaItem>
                    <S.Link>
                      Cleandye
                      <S.SubLink>Nhuộm không dùng nước</S.SubLink>
                    </S.Link>
                  </S.ListMegaItem>
                </ul>
              </TabPane>
            </Tabs>
          </S.MenuMainWrapper>
          <S.NavList>
            <S.Nav>
              <a>Chọn size</a>
            </S.Nav>
            <S.Nav>
              <a>Về coolmate</a>
            </S.Nav>
          </S.NavList>
        </S.MenuInner>
      </S.MenuWrapper>
    </S.MenuContainer>
  );
};
