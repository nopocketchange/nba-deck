import React, { useContext } from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import { ThemeContext } from "./context";
import { Title } from "./styles";
const Pick = ({ handleFavTeam, favTeam, team }) => {
  
console.log(data)
 
  return (
    <div className="App">
     <Title style={{fontSize:'90px'}}>Select Your Team</Title> 
      <div className="bg-gray-100 grid grid-cols-6">
        {data.map((item) => (
          <div
            onClick={(e) => {
              handleFavTeam(e);
      
            }}
            id={item.team}
            key={item.abv}
            className={`bg-pink-100 p-1 hover:bg-${JSON.parse(item.colors)[0].colorName} rounded-lg m-3`}
          >
            <img
            style={{width:'100px', height:'100px'}}
              id={item.team}
              src={item.img}
              alt={item.img}
            />
          </div>
        ))}
      </div>{" "}
      {favTeam &&team  ? (
        <Link
          to={`/team/${team.abv}`}
          style={{width:"inherit", marginTop:'2.5%' }}
          className={`w-full text-center border border-transparent  font-large rounded-md text-white bg-${JSON.parse(team.colors)[0].colorName} hover:bg-${JSON.parse(team.colors)[1].colorName}`}
        >
          <div><Title style={{fontSize:'30px'}}>{favTeam}→</Title> </div>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
export default Pick;
