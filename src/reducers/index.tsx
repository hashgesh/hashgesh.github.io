import { combineReducers } from 'redux';

import { appReducer } from './appReducer';

const marqAppReducer = combineReducers({
  //ui: uiReducer,
  app: appReducer,
});

export default marqAppReducer;
