import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import apiReducer from './reducers/apiReducer';

const rootReducer = combineReducers({ api: apiReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
