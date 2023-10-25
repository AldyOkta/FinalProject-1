import { createStore, combineReducers } from 'redux';
import savedReducer from './reducers/savedReducer';

const rootReducer = combineReducers({
  saved: savedReducer,
});

const store = createStore(rootReducer);

export default store;
