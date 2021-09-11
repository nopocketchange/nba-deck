import * as actions from "./actions";
import { combineReducers } from "redux";

const preferences = (state = { theme: false }, action) => {
  switch (action.type) {
    case actions.CHANGETHEME:
      return { ...state, theme: action.payload.theme };

    default:
      return state;
  }
};

export default combineReducers({ preferences });