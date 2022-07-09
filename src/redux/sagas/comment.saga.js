import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { REQUEST, SUCCESS, FAIL, COMMENT_ACTION } from "../constants";

function* getCommentListSaga(action) {
  try {
    const { productId } = action.payload;
    const result = yield axios.get(`http://localhost:4000/comments`, {
      params: {
        productId,
        _expand: "user",
        _sort: "id",
        _order: "desc",
      },
    });
    yield put({
      type: SUCCESS(COMMENT_ACTION.GET_COMMENT_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(COMMENT_ACTION.GET_COMMENT_LIST),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* sendCommentSaga(action) {
  try {
    const { data } = action.payload;
    const result = yield axios.post(`http://localhost:4000/comments`, data);

    yield put({
      type: SUCCESS(COMMENT_ACTION.SEND_COMMENT),
      payload: {
        data: result.data,
      },
    });
    yield put({
      type: REQUEST(COMMENT_ACTION.GET_COMMENT_LIST),
      payload: {
        productId: data.productId,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(COMMENT_ACTION.SEND_COMMENT),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

export default function* productSaga() {
  yield takeEvery(REQUEST(COMMENT_ACTION.GET_COMMENT_LIST), getCommentListSaga);
  yield takeEvery(REQUEST(COMMENT_ACTION.SEND_COMMENT), sendCommentSaga);
}
