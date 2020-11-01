import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from "./Product/productReducer";
import { UserReducer } from "./Users/UserReducer";
import thunk from "redux-thunk";
import particularProductReducer from "./PaarticularProduct/particularProductReducer";
const reducer = combineReducers({ productList: productReducer, particularProduct: particularProductReducer, userDetails: UserReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;