import {createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';
import {applyMiddleware} from "@reduxjs/toolkit";

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(RootReducer);
