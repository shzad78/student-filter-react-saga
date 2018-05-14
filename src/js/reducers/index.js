import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer';
import fetchFilterReducer from './fetchFilterReducer';

const rootReducer = combineReducers({
  data: fetchDataReducer,
  filter: fetchFilterReducer
});

export default rootReducer;
