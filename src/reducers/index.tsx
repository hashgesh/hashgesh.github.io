import { combineReducers } from 'redux';

import { appReducer } from './appReducer';

const rootReducer = combineReducers({
  //ui: uiReducer,
  app: appReducer,
});

export default rootReducer;
