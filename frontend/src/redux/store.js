import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as ProductPageReducer } from "./ProductPageReducer/reducer";
import { userLoginReducer } from "./user/user login/userLoginReducer";
import { adminProductReducer } from "./admin/admin product/adminProductReducer";
import { shirtReducer } from "./user/shirt/shirtReducer";
import { sarreReducer } from "./user/sarees/sarreReducer";
import { kurtaReducer } from "./user/kurta/kurtaReducer";
import { footwareReducer } from "./user/footware/footwareReducer";
import { dressReducer } from "./user/dresses/dressReducer";
import { accessoriesReducer } from "./user/accessories/accessoriesReducer";
import { reducer as cartPageReducer } from "./CartReducer/reducer";
import { LandingReducer } from "./LandingPage/LandingReducer";
import { userSignupReducer } from "./user/user signup/userSignupReducer";
import { adminSignupReducer } from "./admin/admin signup/adminSignupReducer";
import { adminUserReducer } from "./admin/people/adminUserReducer";
import { adminLoginReducer } from "./admin/admin login/adminLoginReducer";
let rootReducer = combineReducers({
  ProductPageReducer,
  cartPageReducer,
  LandingReducer,
  userLoginReducer,
  adminProductReducer,
  shirtReducer,
  sarreReducer,
  kurtaReducer,
  footwareReducer,
  dressReducer,
  accessoriesReducer,
  userSignupReducer,
  adminSignupReducer,
  adminUserReducer,
  adminLoginReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
