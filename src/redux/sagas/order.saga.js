import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { REQUEST, SUCCESS, FAIL, ORDER_ACTION } from "../constants";

function* getOrderListSaga(action) {
  try {
    const result = yield axios.get(`http://localhost:4000/orders`);
    yield put({
      type: SUCCESS(ORDER_ACTION.GET_ORDER_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.GET_ORDER_LIST),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}
function* getOrderDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/orders/${id}`);
    yield put({
      type: SUCCESS(ORDER_ACTION.GET_ORDER_DETAIL),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.GET_ORDER_DETAIL),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}
function* createOrderSaga(action) {
  try {
    const { data } = action.payload;
    yield axios.post(`http://localhost:4000/orders`, data);
    yield put({ type: SUCCESS(ORDER_ACTION.CREATE_ORDER) });
    yield put({ type: REQUEST(ORDER_ACTION.GET_ORDER_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.CREATE_ORDER),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* updateOrderSaga(action) {
  try {
    const { id, data } = action.payload;
    yield axios.patch(`http://localhost:4000/orders/${id}`, data);
    yield put({ type: SUCCESS(ORDER_ACTION.UPDATE_ORDER) });
    yield put({ type: REQUEST(ORDER_ACTION.GET_ORDER_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.UPDATE_ORDER),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* deleteOrderSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`http://localhost:4000/orders/${id}`);
    yield put({ type: SUCCESS(ORDER_ACTION.DELETE_ORDER) });
    yield put({ type: REQUEST(ORDER_ACTION.GET_ORDER_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.DELETE_ORDER),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

export default function* orderSaga() {
  yield takeEvery(REQUEST(ORDER_ACTION.GET_ORDER_LIST), getOrderListSaga);
  yield takeEvery(REQUEST(ORDER_ACTION.GET_ORDER_DETAIL), getOrderDetailSaga);
  yield takeEvery(REQUEST(ORDER_ACTION.CREATE_ORDER), createOrderSaga);
  yield takeEvery(REQUEST(ORDER_ACTION.UPDATE_ORDER), updateOrderSaga);
  yield takeEvery(REQUEST(ORDER_ACTION.DELETE_ORDER), deleteOrderSaga);
}
