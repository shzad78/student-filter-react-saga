import { put, call } from 'redux-saga/effects';

import * as actions from '../actions';
import * as api from '../api';

export default function* fetchDataSaga(action) {
  const { query } = action.payload;
  yield put(actions.fetchDataAttempt());
  
  try {
    const data = yield call(api.studentHrData, query);
    yield put(actions.fetchDataSuccess(data));
  } catch (e) {
    yield put(actions.fetchDataFail(e));
  }
}
