import {put,call} from 'redux-saga/effects';

import * as actions from '../actions';
import * as api from '../api';

export default function* getFilterStudentsSaga(action){
    const query=action.payload;
    try{
        yield put(actions.fetchFilterAttempt());
        const data=yield call(api.studentHrData )
        console.log("saga filter data is ", data)
            let filterdata 

        //let filterData = data.filter(item =>{ item.studentHR.studentDetails.studentName === query.studentName && item.studentHR.fatherDetails.fatherMobile === query.fatherPh })) {return item}
            filterdata= data.filter(function(item) {
                console.log("saga studentName query ", query.studentName, item.studentHR.studentDetails.studentName)
            if(
                query.studentName==='' && query.fatherPh===''){return true}else 
                 
                if(
            item.studentHR.studentDetails.studentName.replace(/\s/g, '') === query.studentName.toLowerCase().replace(/\s/g, '')
            &&
            item.studentHR.fatherDetails.fatherMobile.replace(/\s/g, '') === query.fatherPh.replace(/\s/g, '') )
            {return true}else  
            if(
                item.studentHR.studentDetails.studentName.replace(/\s/g, '') === query.studentName.toLowerCase().replace(/\s/g, '')
                &&
                query.fatherPh=== '')
                {return true
                }else if(
                    query.studentName === ''
                    &&
                    item.studentHR.fatherDetails.fatherMobile.replace(/\s/g, '') === query.fatherPh.replace(/\s/g, '') )
                    {return true
                    }else{
                return false
            }
        })
        
        console.log("saga filter is ", filterdata)
        
        yield put(actions.fetchDataSuccess(filterdata))
    }
    catch(e){
        yield put(actions.fetchFilterFail(e));
    }
}