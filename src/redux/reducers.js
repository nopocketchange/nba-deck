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
  teams:[],
  error:null,
  loading:false

};

const preferences = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGETHEME:
      return { ...state, theme: action.payload.theme };
    case actions.CHANGETEAM:
      return { ...state, favoriteTeam: action.payload };
    case actions.CHANGEDASHTHEME:
      return { ...state, dashtheme: action.payload };
    case actions.FETCH_TEAM_DETAILS_STARTED:
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_TEAM_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        teams: action.payload.data
      };
    case actions.FETCH_TEAM_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default combineReducers({ preferences });