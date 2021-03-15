import { combineReducers } from "redux";
import cakeReducer from "./reducers/cakeReducer";
import iceCreamReducer from "./reducers/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
