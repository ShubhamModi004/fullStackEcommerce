import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from './root-reducer';


const initialState = {};

const middlewares = [logger];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store;