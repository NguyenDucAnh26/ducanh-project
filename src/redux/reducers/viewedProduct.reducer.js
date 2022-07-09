import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, VIEWED_PRODUCT_ACTION } from "../constants";

const initialState = {
  viewedProductList: {
    data: localStorage.getItem("viewedProducts")
      ? JSON.parse(localStorage.getItem("viewedProducts"))
      : [],

    loading: false,
    error: null,
  },
  createViewedProductData: {
    loading: false,
    error: null,
  },
};

const viewedProductReducer = createReducer(initialState, {
  [REQUEST(VIEWED_PRODUCT_ACTION.GET_VIEWED_PRODUCT_LIST)]: (state) => {
    localStorage.setItem(
      "viewedProducts",
      JSON.stringify(state.viewedProductList.data)
    );
    return {
      ...state,
      viewedProductList: {
        ...state.viewedProductList,
      },
    };
  },

  [REQUEST(VIEWED_PRODUCT_ACTION.CREATE_VIEWED_PRODUCT)]: (state, action) => {
    const { data } = action.payload;
    const newViewedProduct = {
      ...data,
    };
    return {
      ...state,
      viewedProductList: [newViewedProduct, ...state.viewedProductList],
    };
  },
});

export default viewedProductReducer;
