let ATL = require("../../assets/teams/ATL.json");
let BOS = require("../../assets/teams/BOS.json");
let BKN = require("../../assets/teams/BKN.json");
let CHA = require("../../assets/teams/CHA.json");
let CHI = require("../../assets/teams/CHI.json");
let CLE = require("../../assets/teams/CLE.json");
let DAL = require("../../assets/teams/DAL.json");
let DEN = require("../../assets/teams/DEN.json");
let DET = require("../../assets/teams/DET.json");
let GSW = require("../../assets/teams/GSW.json");
let HOU = require("../../assets/teams/HOU.json");
let IND = require("../../assets/teams/IND.json");
let LAC = require("../../assets/teams/LAC.json");
let LAL = require("../../assets/teams/LAL.json");
let MEM = require("../../assets/teams/MEM.json");
let MIA = require("../../assets/teams/MIA.json");
let MIL = require("../../assets/teams/MIL.json");
let MIN = require("../../assets/teams/MIN.json");
let NOP = require("../../assets/teams/NOP.json");
let NYK = require("../../assets/teams/NYK.json");
let OKC = require("../../assets/teams/OKC.json");
let ORL = require("../../assets/teams/ORL.json");
let PHI = require("../../assets/teams/PHI.json");
let PHX = require("../../assets/teams/PHX.json");
let POR = require("../../assets/teams/POR.json");
let SAC = require("../../assets/teams/SAC.json");
let SAS = require("../../assets/teams/SAS.json");
let TOR = require("../../assets/teams/TOR.json");
let UTA = require("../../assets/teams/UTA.json");
let WAS = require("../../assets/teams/WAS.json");

const teams = [
  { ...ATL, key: "ATL" },
  { ...BOS, key: "BOS" },
  { ...BKN, key: "BKN" },
  { ...CHA, key: "CHA" },
  { ...CHI, key: "CHI" },
  { ...CLE, key: "CLE" },
  { ...DAL, key: "DAL" },
  { ...DEN, key: "DEN" },
  { ...DET, key: "DET" },
  { ...GSW, key: "GSW" },
  { ...HOU, key: "HOU" },
  { ...IND, key: "IND" },
  { ...LAC, key: "LAC" },
  { ...LAL, key: "LAL" },
  { ...MEM, key: "MEM" },
  { ...MIA, key: "MIA" },
  { ...MIL, key: "MIL" },
  { ...MIN, key: "MIN" },
  { ...NOP, key: "NOP" },
  { ...NYK, key: "NYK" },
  { ...OKC, key: "OKC" },
  { ...ORL, key: "ORL" },
  { ...PHI, key: "PHI" },
  { ...PHX, key: "PHX" },
  { ...POR, key: "POR" },
  { ...SAC, key: "SAC" },
  { ...SAS, key: "SAS" },
  { ...TOR, key: "TOR" },
  { ...UTA, key: "UTA" },
  { ...WAS, key: "WAS" },
];

exports.findTeams = async (req, res) => {
  try {
    if (teams) {
      res.status(200).json({ data: teams });
    }
  } catch (err) {
    console.log(err);

    res.status("400").json({ message: "Could not fetch teams" });
  }
};

exports.findTeamsByABV = async (req, res) => {
  const { id } = req.params.id;
  try {
    let teams = teams.filter((teams) => teams.key === id);
    if (teams) {
      res.status(200).json({ data: teams });
    }
  } catch (err) {
    console.log(err);

    res.status("400").json({ message: "Could not fetch selected teams" });
  }
};
