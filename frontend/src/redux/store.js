import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
 
import {reducer as ProductPageReducer} from "./ProductPageRedux/reducer"
import {reducer as cartPageReducer} from "./CartReducer/reducer"
import { LandingReducer } from "./LandingPage/LandingReducer";

let rootReducer = combineReducers({
    ProductPageReducer,
    cartPageReducer ,
  LandingReducer,
 
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
