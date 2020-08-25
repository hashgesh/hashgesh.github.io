import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
var marqAppReducer = combineReducers({
    //ui: uiReducer,
    app: appReducer,
});
export default marqAppReducer;
