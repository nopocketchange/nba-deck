
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { fetchTeamColors, fetchTeamDetails, fetchTeamRosters } from "./redux/actions";
import Landing from './pages/Landing';
import PickATeam from "./pages/PickATeam";
import Dashboard from "./pages/Dashboard";
const App = () => {
   const dispatch = useDispatch();
   const {teams, rosters, colors} =  useSelector(state => state.preferences)
  useEffect(() => {
    if(!teams &&!rosters &&!colors){
      dispatch(fetchTeamDetails())
      dispatch(fetchTeamRosters())
      dispatch(fetchTeamColors())
    }
   
   
  }, [teams, dispatch, rosters])
  return (
    <Switch>
    <Route path="/team/:id">
      <Dashboard  />
    </Route>
    <Route  path="/pick-a-team">
      <PickATeam />
    </Route>
    <Route exact path="/"><Landing/></Route>

    
  </Switch>
  )
}

export default App
