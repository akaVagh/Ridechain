import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import apiReducer from './reducers/apiReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({ api: apiReducer, user: userReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
