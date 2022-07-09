import * as S from "./styles";
import { Form, Input, Select, Slider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getProductListAction,
  getCategoryListAction,
  deleteProductAction,
} from "../../../../../redux/actions";
const { Option } = Select;

function CollectionFilter({ handleSearh, handleFilterCategory }) {
  const onChange = (value) => {};

  const onAfterChange = (value) => {};

  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const formattedCategoryOptions = categoryList.data.map((item) => {
    return (
      <Option key={item.id} value={item.id}>
        {item.name}
      </Option>
    );
  });

  return (
    <S.Filter>
      <S.FilterContainer>
        <S.FilterWrapper>
          <S.FilterInner>
            <S.FilterTitle>Sản phẩm</S.FilterTitle>
            <S.FilterSearch>
              <Form
                style={{
                  height: "60%",
                }}
              >
                <Form.Item>
                  <Input
                    onPressEnter={(e) => handleSearh(e.target.value)}
                    id="inputHeader"
                    placeholder="Tìm kiếm sản phẩm..."
                    prefix={<SearchOutlined />}
                    style={{
                      width: "220px",
                      height: "40px",
                      border: "1px solid #ccc",
                      borderRadius: "50px",
                    }}
                  />
                </Form.Item>
              </Form>
            </S.FilterSearch>
          </S.FilterInner>
          <S.FilterSelect>
            <S.SelectItem>
              <Select
                placeholder="Kích cỡ"
                style={{
                  width: 130,
                  borderRadius: "50px",
                }}
              >
                <Option value="S">S</Option>
                <Option value="M">M</Option>
                <Option value="L">L</Option>
                <Option value="XL">XL</Option>
                <Option value="2XL">2XL</Option>
                <Option value="3XL">3XL</Option>
              </Select>
            </S.SelectItem>
            <S.SelectItem>
              <Select
                showSearch={false}
                mode="multiple"
                placeholder="Nhóm sản phẩm"
                onChange={(values) => {
                  handleFilterCategory(values);
                }}
                style={{
                  width: 300,
                }}
              >
                {formattedCategoryOptions}
              </Select>
            </S.SelectItem>
            <S.SelectItem>
              <Select
                defaultValue=""
                style={{
                  width: 130,
                }}
              >
                <Option value="">Sắp xếp</Option>
                <Option value="lucy">Mới nhất</Option>
                <Option value="bán chạy">Bán chạy</Option>
                <Option value="giá thấp đến cao">Giá thấp đến cao</Option>
                <Option value="giá cao đến thấp">Giá cao đến thấp</Option>
                <Option value="% giảm giá nhiều">% giảm giá nhiều</Option>
              </Select>
            </S.SelectItem>
          </S.FilterSelect>
        </S.FilterWrapper>
      </S.FilterContainer>
    </S.Filter>
  );
}

export default CollectionFilter;
