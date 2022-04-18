import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const fakeReducer = () => ({ fake: true });
const rootReducer = combineReducers({ fakeReducer });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
