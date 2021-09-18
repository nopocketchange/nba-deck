import * as actions from "./actions";
import { combineReducers } from "redux";

const preferences = (state = { theme:{  background: "#272823",
title: "#6495ed",
text: "#fff"} }, action) => {
  switch (action.type) {
    case actions.CHANGETHEME:
      return { ...state, theme: action.payload.theme };

    default:
      return state;
  }
};

export default combineReducers({ preferences });