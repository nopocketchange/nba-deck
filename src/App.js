import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeStore } from "./context";
import Theme from "./styles/Theme";
import Dashboard from "./Dashboard";
import data from "./data.json";
import Pick from "./Pick";
import "./styles.css";
import { ThemeContext } from "./context";
import Landing from "./Landing";

export default function App() {
  const [favTeam, setFavTeam] = useState(null);
  const [team, setTeam] = useState(null);
  const { theme, switchTheme } = useContext(ThemeContext);
  
  // useEffect(() => {
  //   if (favTeam) {
  //     let res = data.filter((item) => item.team == favTeam)[0];
  //     console.log(res);
  //     setTeam(res);
  //   }
  // }, [favTeam]);
  const handleFavTeam =async (e) => {
  try{
    const { id } = e.target;
    let res =await data.filter((item) => item.team == id)[0];
    const finallyy = JSON.parse(res.colors).map((color) => {
      return color.colorName;
    });

    let final =  {
      background: finallyy[0],
      title: finallyy[1],
      text: finallyy[2] || "#fff"
    };
    setTeam(res);
    switchTheme(final)
    setFavTeam(id);
  }
    catch(err){
      console.log(err)
    }
  };

  return (
   
        <Switch>
          <Route path="/team/:id">
            <Dashboard team={team} />
          </Route>
          <Route  path="/pick-a-team">
            <Pick handleFavTeam={handleFavTeam} favTeam={favTeam} team={team} />
          </Route>
          <Route exact path="/"><Landing/></Route>
  
          
        </Switch>

  
  );
}
