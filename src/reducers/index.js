import { SET_CARS } from "../actions";
import { combineReducers } from "redux";

function cars(state = [], action) {
  switch (action.type) {
    case SET_CARS:
      return action.items;
      break;
    default:
      return state;

  }
}

const rootReducer = combineReducers({ cars });

export default rootReducer;
