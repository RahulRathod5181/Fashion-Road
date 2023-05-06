import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
// import {reducer as ProductPageReducer} from "./ProductPageReducer/reducer"
import {reducer as ProductPageReducer} from "./ProductPageRedux/reducer"
let rootReducer = combineReducers({
    ProductPageReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
