

import { Switch, Route } from "react-router-dom";
import Landing from './pages/Landing';
import PickATeam from "./pages/PickATeam";
const App = () => {
  return (
    <Switch>
    {/* <Route path="/team/:id">
      <Dashboard team={team} />
    </Route> */}
    <Route  path="/pick-a-team">
      <PickATeam />
    </Route>
    <Route exact path="/"><Landing/></Route>

    
  </Switch>
  )
}

export default App
