import { takeLatest, fork, all,takeEvery } from 'redux-saga/effects';
import * as types from '../constants';
// import fetchDataSaga from './fetchDataSaga';
import getStudentsSaga from './getStudentsSaga';
import getFilterStudentsSaga from './getFilterStudentsSaga';


// function* watchFetchData() {
//   yield takeLatest(types.FETCH_DATA, fetchDataSaga);
// }

function* watchGetPics(){
  //yield takeLatest(types.FETCH_DATA,getPicsSaga)
  yield takeLatest(types.FETCH_DATA,getStudentsSaga)
}
function* watchGetFilter(){
  //yield takeLatest(types.FETCH_FILTER,getPicsSaga)
  yield takeLatest(types.FETCH_FILTER,getFilterStudentsSaga)
}


export default function* rootSaga() {
  yield all([
   // fork(watchFetchData)
   fork(watchGetPics),
   fork(watchGetFilter)
    // another action listener,
  ]);
}
