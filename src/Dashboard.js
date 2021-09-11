import React, { useContext, useEffect, useState } from "react";

import { ThemeContext } from "./context";
import classNames from "classnames";
import data from "./nbaData.json";
import PlayerCard from "./PlayerCard";
import { Timeline } from "react-twitter-widgets";
import { useParams } from "react-router-dom";
import { Title } from "./styles";
import ytch from "yt-channel-info";
const Dashboard = ({ team, unc }) => {
  const [teamData, setTeamData] = useState(null)
  const {id} = useParams()
  const { theme } = useContext(ThemeContext);

  useEffect(()=>{
    if (id){
      let res = data.filter(item=> item.abv==id);setTeamData(res[0]);
      console.log(res)
      ytch
      .getChannelVideos(res[0].youtube, ["newest"], [3])
      .then((response) => {
        console.log(JSON.stringify(response.items));
      })
      .catch((err) => {
        console.log(err);
      }); 

      
    
    
    } 
 
  },[id])
  return (
    <div>
      <div className={classNames("p-20", `bg-${theme.background}`)}>
        {/* <h3 className=" mb-4 text-sm font-bold">{team ? team.team : ""} </h3> */}
        <div className={classNames("bg-white p-6 rounded-lg shadow-lg flex ",`bg-${theme.title}`)}>
        
          <div className="flex"><Title style={{width:'50px'}}>{team ? team.team  : ""}</Title>   
          <img src={team.img} alt={team.img}  style={{width:'250px'}} /></div>
          <p className={classNames(" text-center", `text-${theme.text}`)}>This is my cool new card!</p>
        </div>
      </div>
      <div className="card-body"><h2 className="my-4 text-4xl font-bold card-title">The BreakDown</h2> <div className="mb-4 space-x-2 card-actions"><div className="badge badge-ghost">Colors</div> <div className="badge badge-ghost">UI Design</div> <div className="badge badge-ghost">Creativity</div></div> <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
      
      <p>EST 🕛: 1948 </p>
      <p>HomeCourt 🏠 :Staples Center</p>
      <p>Rings:🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆</p>
      <p>All Time Record:  3427-2331</p>
      <div className="justify-end space-x-2 card-actions"><button className="btn btn-primary">Login</button> <button className="btn">Register</button></div></div>
      <h2 className={classNames(" text-4xl font-bold card-title",`bg-${theme.title}`)}>The Roster</h2>
      <div className="card-wrapper"><PlayerCard/><PlayerCard/><PlayerCard/><PlayerCard/><PlayerCard/><PlayerCard/></div>
      <div className="flex">
        <div className={classNames("p-20 w-full md:w-1/2",`bg-${theme.title}`)}>
          <h3 className={classNames(" font-bold mb-4",`text-${theme.text}`)}>2. Card with image</h3>
          <div className="bg-white rounded-lg shadow-lg">
            {/* <img
              src="/images/Atlanta Hawks_stadium.jpg"
           
              alt=""
             
              className="rounded-t-lg"
            /> */}
            <div className="p-6">
           

{teamData?<Timeline
  dataSource={{
    sourceType:'profile',
    
    screenName: teamData.twitter
  }}
  options={{
    height: '600'
  }}
/>:''}
              {/* <h2 className={classNames("font-bold mb-2 text-2xl ",`text-${theme.text}`)}>
                Card with an image
              </h2>
              <p className={classNames(" mb-2",`text-${theme.text}`)}>
                This is a little bit better of a card!
              </p>
              <a
                href="#"
                className={classNames("hover:text-white-500 underline text-sm",`text-${theme.text}`)}
              >
                Read More 👉
              </a> */}
            </div>
          </div>
        </div>
        <div className={classNames("p-20 w-full md:w-1/2",`bg-${theme.title}`)}>
          <h3 className={classNames(" font-bold mb-4",`text-${theme.text}`)}>2. Card with image</h3>
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src="/images/Atlanta Hawks_teamJersey.png"
              alt=""
              className="rounded-t-lg"
            />
            <div className="p-6">
              <h2 className={classNames("font-bold mb-2 text-2xl ",`text-${theme.text}`)}>
                Card with an image
              </h2>
              <p className={classNames(" mb-2",`text-${theme.text}`)}>
                This is a little bit better of a card!
              </p>
              <a
                href="#"
                className={classNames("hover:text-white-500 underline text-sm",`text-${theme.text}`)}
              >
                Read More 👉
              </a>
            </div>
          </div>
        </div>
        </div>
    
      <div className={classNames("p-20 ",`bg-${theme.background}`)} >
        <h3 className={classNames(" font-bold mb-4",`text-${theme.text}`)} >
          3. Horizontal &amp; Responsive Card
        </h3>
        <div className={classNames(" rounded-lg shadow-2xl md:flex", `bg-${theme.title}`)}>
          <img
            src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
            alt="Laptop on Desk"
            className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div className="p-6">
            <h2 className={classNames("font-bold text-xl md:text-3xl mb-2 " ,`text-${theme.text}`)}>
              Horizontal Card
            </h2>
            <p className={classNames("", `text-${theme.text}`)}>Look at me go sideways!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
