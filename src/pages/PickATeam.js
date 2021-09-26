import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import { useSelector, useDispatch } from "react-redux";
import { Title } from "../style";
const PickATeam = ({  }) => {
    
    const dispatch = useDispatch();
    const favoriteTeam = useSelector((state) => state.preferences.favoriteTeam);
    console.log(favoriteTeam)
    const handleFavTeam = (e) => {
        
          const { id } = e.target;
          let res = data.filter((item) => item.team == id)[0];
          const finallyy = JSON.parse(res.colors).map((color) => {
            return color.colorName;
          });
      
          let final =  {
            background: finallyy[0],
            title: finallyy[1],
            text: finallyy[2] || "#fff"
          };
          console.log(res)
          dispatch({ type: 'CHANGETEAM', payload:{...res} })
        //   setTeam(res);
        //   switchTheme(final)
          dispatch({ type: 'CHANGEDASHTHEME', payload:final })
          
       
        };
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
      {favoriteTeam.colors  ? (
        <Link
          to={`/team/${favoriteTeam.abv}`}
          style={{width:"inherit", marginTop:'2.5%' }}
          className={`w-full text-center border border-transparent  font-large rounded-md text-white bg-${JSON.parse(favoriteTeam.colors)[0].colorName} hover:bg-${JSON.parse(favoriteTeam.colors)[1].colorName}`}
        >
          <div><Title style={{fontSize:'30px'}}>{favoriteTeam.team}→</Title> </div>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
export default PickATeam;
