import {put,call} from 'redux-saga/effects';

import * as actions from '../actions';
import * as api from '../api';

export default function* getStudentsSaga(action){
    const query=action.payload;
    try{
        yield put(actions.fetchDataAttempt());
        const data=yield call(api.studentHrData,query)
        
        yield put(actions.fetchDataSuccess(data))
    }
    catch(e){
        yield put(actions.fetchDataFail(e));
    }
}