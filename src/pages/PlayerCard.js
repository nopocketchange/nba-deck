import "../index.css";
import classNames from 'classnames'
export default function PlayerCard({player, dashtheme}){
  console.log(player)
  let play = {name:'Jimmy Butler', number:22, team:'Miami Heat', position:'SG/SF', ppg:21.9, ast:7.1, trb:6.9, image:'https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png'}
 let theme = {background: "Miami-Heat-Red",
 text: "Miami-Heat-Black",
 title: "Miami-Heat-Yellow"}
  return player && (
      <div>



    <div className={classNames("card text-center shadow-2xl", `bg-${dashtheme.background}`)}id="cardcont" >
      <h2
        className={classNames("text-1xl font-bold card-title pt-4", `text-${dashtheme.text}`)}

        style={{ fontSize: "28px" }}
      >
        {player["PLAYER"]}
      </h2>
    
      <figure className="">
        <div className={classNames("", `bg-${dashtheme.title}`)} id="card">
          <img
            src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player["PLAYER_ID"]}.png`}
            alt={play.name}
            className="rounded-xl"
          />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{play.postion}for {play.team} </h2>
        <div className="shadow stats">
          <div className={classNames("stat", `${theme.text}`)}>
            <div className="stat-title">Points </div>
            <div className="stat-value">{play.ppg}</div>
     
          </div>
        

          <div className={classNames("stat", `${theme.text}`)}>
            <div className="stat-title">Assists</div>
            <div className="stat-value">{play.ast}</div>
     
          </div>
        </div>
       
        <div className="shadow stats ">
          <div className={classNames("stat", `${theme.text}`)}>
            <div className="stat-title">Total Rebounds </div>
            <div className="stat-value">{play.trb}</div>
     
          </div>
          
          <div className={classNames("stat", `${theme.text}`)}>
            <div className="stat-title">Turnovers</div>
            <div className="stat-value">1.5</div>
     
          </div>
        </div>

        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="justify-center card-actions">
          <button className="btn btn-outline btn-accent">More info</button>
        </div>
      </div>
    </div>
  </div>
);
}