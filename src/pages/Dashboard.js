import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import classNames from "classnames";
// import data from "../nbaData.json";
import PlayerCard from "./PlayerCard";
import { Timeline } from "react-twitter-widgets";
import { useParams } from "react-router-dom";
import { Title } from "../style";
// import ytch from "yt-channel-info";
// import { fetchTeamDetails } from "../redux/actions";
const Dashboard = ({  team}) => {
    const {favoriteTeam, dashtheme, teams, rosters} = useSelector((state) => state.preferences);
    const [teamDetails, setTeamDetails] = useState(null)
    const [teamRosters, setTeamRosters] = useState(null)
    const {id} = useParams()
    
   

  useEffect(()=>{
    if (id && teams.length>0){
      let details = teams.filter(item=> item.key===id);setTeamDetails(details[0]);
      let roster = rosters.filter(item=> item.key===id);setTeamRosters(roster[0]);
     console.log(details[0]["2"]["0"][2]["WEBSITE_LINK"].split("/")[3])
      // ytch
      // .getChannelVideos(res[0].youtube, ["newest"], [3])
      // .then((response) => {
      //   console.log(JSON.stringify(response.items));
      // })
      // .catch((err) => {
      //   console.log(err);
      // }); 

      
    
    
    } if(id && rosters.length>0){
      let roster = rosters.filter(item=> item.key===id);setTeamRosters(roster[0]);
      console.log(roster)
    }
 
  },[id, teams, rosters])
  return teamDetails &&  (
    <div>
      <div className={classNames("p-20", `bg-${dashtheme.background}`)}>
        {/* <h3 className=" mb-4 text-sm font-bold">{team ? favoriteTeam.team : ""} </h3> */}
        <div className={classNames("bg-white p-6 rounded-lg shadow-lg flex ",`bg-${dashtheme.title}`)}>
        
          <img src={favoriteTeam.img} alt={favoriteTeam.img}  style={{width:'250px'}} />
        <Title style={{width:'50px'}}>{teamDetails?`${teamDetails["1"]["0"][0]["CITY"]} ${teamDetails["1"]["0"][0]["NICKNAME"]}`:''}</Title>   
   </div>
      </div>
      <div className="card-body"><h2 className="my-4 text-4xl font-bold card-title">The BreakDown</h2> <div className="mb-4 space-x-2 card-actions"><div className="badge badge-ghost">Colors</div> <div className="badge badge-ghost">UI Design</div> <div className="badge badge-ghost">Creativity</div></div> <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
      
      <p>EST 🕛:{teamDetails?teamDetails["0"]["0"][0]["YEARFOUNDED"]:''} </p>
      <p>HomeCourt 🏠 :{teamDetails?teamDetails["0"]["0"][0]["ARENA"]:''}</p>
      <p>Rings:🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆</p>
      <p>All Time Record:  3427-2331</p>
      <div className="justify-end space-x-2 card-actions"><button className="btn btn-primary">Login</button> <button className="btn">Register</button></div></div>
      <h2 className={classNames(" text-4xl font-bold card-title",`bg-${dashtheme.title}`)}>The Roster</h2>
      <div className="card-wrapper">{teamRosters? teamRosters[0]["0"].map((player, idx)=>(
      <PlayerCard key={idx} player={player} dashtheme={dashtheme}/>)):''}</div>
      <div className="flex">
        <div className={classNames("p-20 w-full md:w-1/2",`bg-${dashtheme.title}`)}>
          <h3 className={classNames(" font-bold mb-4",`text-${dashtheme.text}`)}>2. Card with image</h3>
          <div className="bg-white rounded-lg shadow-lg">
            {/* <img
              src="/images/Atlanta Hawks_stadium.jpg"
           
              alt=""
             
              className="rounded-t-lg"
            /> */}
            <div className="p-6">
           

 <Timeline
  dataSource={{
    sourceType:'profile',
    
    screenName: teamDetails?teamDetails["2"]["0"][2]["WEBSITE_LINK"].split("/")[3]:'nopocketchange'
  }}
  options={{
    height: '600'
  }}
/>
              {/* <h2 className={classNames("font-bold mb-2 text-2xl ",`text-${dashtheme.text}`)}>
                Card with an image
              </h2>
              <p className={classNames(" mb-2",`text-${dashtheme.text}`)}>
                This is a little bit better of a card!
              </p>
              <a
                href="#"
                className={classNames("hover:text-white-500 underline text-sm",`text-${dashtheme.text}`)}
              >
                Read More 👉
              </a> */}
            </div>
          </div>
        </div>
        <div className={classNames("p-20 w-full md:w-1/2",`bg-${dashtheme.title}`)}>
          <h3 className={classNames(" font-bold mb-4",`text-${dashtheme.text}`)}>2. Card with image</h3>
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src="/images/Atlanta Hawks_teamJersey.png"
              alt=""
              className="rounded-t-lg"
            />
            <div className="p-6">
              <h2 className={classNames("font-bold mb-2 text-2xl ",`text-${dashtheme.text}`)}>
                Card with an image
              </h2>
              <p className={classNames(" mb-2",`text-${dashtheme.text}`)}>
                This is a little bit better of a card!
              </p>
              <a
                href="#"
                className={classNames("hover:text-white-500 underline text-sm",`text-${dashtheme.text}`)}
              >
                Read More 👉
              </a>
            </div>
          </div>
        </div>
        </div>
    
      <div className={classNames("p-20 ",`bg-${dashtheme.background}`)} >
        <h3 className={classNames(" font-bold mb-4",`text-${dashtheme.text}`)} >
          3. Horizontal &amp; Responsive Card
        </h3>
        <div className={classNames(" rounded-lg shadow-2xl md:flex", `bg-${dashtheme.title}`)}>
          <img
            src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
            alt="Laptop on Desk"
            className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div className="p-6">
            <h2 className={classNames("font-bold text-xl md:text-3xl mb-2 " ,`text-${dashtheme.text}`)}>
              Horizontal Card
            </h2>
            <p className={classNames("", `text-${dashtheme.text}`)}>Look at me go sideways!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
