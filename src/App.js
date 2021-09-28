
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { fetchTeamDetails } from "./redux/actions";
import Landing from './pages/Landing';
import PickATeam from "./pages/PickATeam";
import Dashboard from "./pages/Dashboard";
const App = () => {
   const dispatch = useDispatch();
   const {teams} =  useSelector(state => state.preferences)
  useEffect(() => {
    if(teams.length===0){
      dispatch(fetchTeamDetails())
    }
   
  }, [teams, dispatch])
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
