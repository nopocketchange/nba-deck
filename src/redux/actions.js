import axios from 'axios';
export const CHANGETHEME = "CHANGETHEME";
export const CHANGEDASHTHEME = "CHANGEDASHTHEME";
export const CHANGETEAM ="CHANGETEAM"
export const FETCH_TEAM_DETAILS_SUCCESS ="FETCH_TEAM_DETAILS_SUCCESS";
export const FETCH_TEAM_DETAILS_FAILURE = "FETCH_TEAM_DETAILS_FAILURE";
export const FETCH_TEAM_DETAILS_STARTED = "FETCH_TEAM_DETAILS_STARTED";

export const toggleTheme = (theme) => ({
  type: CHANGETHEME, payload:theme
});


export const toggleTeams = (team) => ({
  type: CHANGETEAM, payload:team
})

export const toggleDashTheme =(theme) => ({
  type: CHANGEDASHTHEME, payload:theme
});


export const fetchTeamDetails = ( ) => {
  return dispatch => {
    dispatch(fetchTeamDetailsStarted());
      
   return axios.get("http://localhost:8000/api/teams")
      .then(res => {
        
        dispatch(fetchTeamDetailsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchTeamDetailsFailure(err.message));
      });
  };
};

const fetchTeamDetailsSuccess = team => ({
  type: FETCH_TEAM_DETAILS_SUCCESS,
  payload: {
    ...team
  }
});

const fetchTeamDetailsStarted = () => ({
  type: FETCH_TEAM_DETAILS_STARTED
});

const fetchTeamDetailsFailure = error => ({
  type: FETCH_TEAM_DETAILS_FAILURE,
  payload: {
    error
  }
});