import { createAction } from "@reduxjs/toolkit";
import { REQUEST, VIEWED_PRODUCT_ACTION } from "../constants";

export const getViewedProductListAction = createAction(
  REQUEST(VIEWED_PRODUCT_ACTION.GET_VIEWED_PRODUCT_LIST)
);

export const createViewedProductAction = createAction(
  REQUEST(VIEWED_PRODUCT_ACTION.CREATE_VIEWED_PRODUCT)
);
