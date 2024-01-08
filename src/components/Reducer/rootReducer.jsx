import BoardReducer from "./BoardReducer";
import { combineReducers } from "redux";
import CardReducer from "./CardReducer";
import UserReducer from "./UserReducer";
import TestReducer from "./TestReducer";

const rootReducer = combineReducers({
  BoardReducer,
  CardReducer,
  UserReducer,
  TestReducer,
});

export default rootReducer;
