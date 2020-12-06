import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

export const middlewares = composeWithDevTools(applyMiddleware(
   thunk,
   logger
));