import React from "react";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, InputNumber, Button, Select } from "antd";
import { ROUTES } from "../../../constants/routes";
import { useNavigate, useParams } from "react-router-dom";

import {
  updateProductAction,
  getProductDetailAction,
  getCategoryListAction,
  clearProductDetailAction,
} from "../../../redux/actions";
import * as S from "./styles";
function UpdateProductPage() {
  const [updateForm] = Form.useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { productDetail, updateProductData } = useSelector(
    (state) => state.product
  );
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryListAction());
    dispatch(getProductDetailAction({ id: id }));
    return () => {
      dispatch(clearProductDetailAction());
    };
  }, []);

  useEffect(() => {
    if (productDetail.data.id) {
      updateForm.resetFields();
    }
  }, [productDetail.data]);

  const renderCategoryOptions = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.id}>
          {item.name}
        </Select.Option>
      );
    });
  }, [categoryList]);
  function handleUpdateProduct(values) {
    dispatch(
      updateProductAction({
        id: id,
        data: values,
        callback: {
          goToList: () => navigate(ROUTES.ADMIN.PRODUCTS),
        },
      })
    );
  }

  return (
    <S.AddProductContainer>
      <S.AddProductWrapper>
        <S.HeadContainer>
          <S.HeadTitle>Update product</S.HeadTitle>
          <Button
            loading={updateProductData.loading}
            type="primary"
            onClick={() => updateForm.submit()}
            // loading={updateProductData.loading}
          >
            Update
          </Button>
        </S.HeadContainer>
        <S.ContentForm>
          <Form
            initialValues={{
              name: productDetail.data.name,
              price: productDetail.data.price,
              categoryId: productDetail.data.categoryId,
            }}
            onFinish={(values) => handleUpdateProduct(values)}
            form={updateForm}
            name="Update Product"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 16,
            }}
          >
            <Form.Item
              name="name"
              label="Product name"
              validateFirst
              rules={[
                {
                  required: true,
                  message: "Name l?? b???t bu???c!",
                },
              ]}
            >
              <Input placeholder="product name..." />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Gi?? l?? b???t bu???c!",
                },
                {
                  type: "number",
                  min: 10000,
                  message: "Gi?? ph???i l???n h??n 10.000!",
                },
              ]}
              name="price"
              label="Price"
            >
              <InputNumber
                placeholder=" product price..."
                prefix="??"
                style={{
                  width: "200px",
                }}
              />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "category l?? b???t bu???c!",
                },
              ]}
              label="category"
              name="categoryId"
            >
              <Select
                style={{
                  width: 120,
                }}
                placeholder="category..."
              >
                {renderCategoryOptions}
              </Select>
            </Form.Item>
          </Form>
        </S.ContentForm>
      </S.AddProductWrapper>
    </S.AddProductContainer>
  );
}

export default UpdateProductPage;
