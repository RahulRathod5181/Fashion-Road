import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
// import {reducer as ProductPageReducer} from "./ProductPageReducer/reducer"
import {reducer as ProductPageReducer} from "./ProductPageRedux/reducer";
import {reducer as cartPageReducer} from "./CartReducer/reducer";
let rootReducer = combineReducers({
    ProductPageReducer,
    cartPageReducer
});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
