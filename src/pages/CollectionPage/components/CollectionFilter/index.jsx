import * as S from "./styles";
import { Form, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

function CollectionFilter() {
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
                defaultValue=""
                style={{
                  width: 130,
                  borderRadius: "50px",
                }}
              >
                <Option value="">Kích cỡ</Option>
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
                defaultValue=""
                style={{
                  width: 130,
                }}
              >
                <Option value="">Nhóm sản phẩm</Option>
                <Option value="áo polo">Áo polo</Option>
                <Option value="áo sơmi">Áo sơ mi</Option>
                <Option value="áo tanktop">Áo tanktop</Option>
                <Option value="áo tee">Áo tee</Option>
                <Option value="áo thể thao">Áo thể thao</Option>
                <Option value="quần">Quần</Option>
                <Option value="quần dài">Quần dài</Option>
                <Option value="quần shorts">Quần short</Option>
                <Option value="phụ kiện">Phụ kiện</Option>
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
