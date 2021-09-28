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
  teams:null,
  teamloading:false,
  teamerror:null,
  rosterloading:false,
  rostererr:false,
  rosters:null,
  colors:null,
  colorloading:false,
  colorerr:null

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
        teamloading: true
      };
    case actions.FETCH_TEAM_DETAILS_SUCCESS:
      return {
        ...state,
        teamloading: false,
        teamerror: null,
        teams: action.payload.team
      };
    case actions.FETCH_TEAM_DETAILS_FAILURE:
      return {
        ...state,
        teamloading: false,
        teamerror: action.payload.error
      };
      case actions.FETCH_TEAM_ROSTER_STARTED:
      return {
        ...state,
        rosterloading: true
      };
    case actions.FETCH_TEAM_ROSTER_SUCCESS:
      return {
        ...state,
        rosterloading: false,
        rostererror: null,
        rosters: action.payload.roster
      };
    case actions.FETCH_TEAM_ROSTER_FAILURE:
      return {
        ...state,
        rosterloading: false,
        rostererror: action.payload.error
      };
      case actions.FETCH_TEAM_COLORS_STARTED:
        return {
          ...state,
          colorsloading: true
        };
      case actions.FETCH_TEAM_COLORS_SUCCESS:
        return {
          ...state,
          colorsloading: false,
          colorerror: null,
          colors: action.payload.color
        };
      case actions.FETCH_TEAM_COLORS_FAILURE:
        return {
          ...state,
          colorsloading: false,
          colorerror: action.payload.error
        };
    default:
      return state;
  }
};

export default combineReducers({ preferences });