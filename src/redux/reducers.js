import * as actions from "./actions";
import { combineReducers } from "redux";

let initialState = {
  theme:{  
    background: "#272823",
    title: "#6495ed",
    text: "#fff"
  },
  favoriteTeam:{},
  dashtheme:{},
  teams:[]
};

const preferences = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGETHEME:
      return { ...state, theme: action.payload.theme };
    case actions.CHANGETEAM:
      return { ...state, favoriteTeam: action.payload };
      case actions.CHANGEDASHTHEME:
        return { ...state, dashtheme: action.payload.theme };
    default:
      return state;
  }
};

export default combineReducers({ preferences });