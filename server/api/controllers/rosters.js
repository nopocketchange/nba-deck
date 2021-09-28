let ATL = require("../../assets/rosters/ATL.json");
let BOS = require("../../assets/rosters/BOS.json");
let BKN = require("../../assets/rosters/BKN.json");
let CHA = require("../../assets/rosters/CHA.json");
let CHI = require("../../assets/rosters/CHI.json");
let CLE = require("../../assets/rosters/CLE.json");
let DAL = require("../../assets/rosters/DAL.json");
let DEN = require("../../assets/rosters/DEN.json");
let DET = require("../../assets/rosters/DET.json");
let GSW = require("../../assets/rosters/GSW.json");
let HOU = require("../../assets/rosters/HOU.json");
let IND = require("../../assets/rosters/IND.json");
let LAC = require("../../assets/rosters/LAC.json");
let LAL = require("../../assets/rosters/LAL.json");
let MEM = require("../../assets/rosters/MEM.json");
let MIA = require("../../assets/rosters/MIA.json");
let MIL = require("../../assets/rosters/MIL.json");
let MIN = require("../../assets/rosters/MIN.json");
let NOP = require("../../assets/rosters/NOP.json");
let NYK = require("../../assets/rosters/NYK.json");
let OKC = require("../../assets/rosters/OKC.json");
let ORL = require("../../assets/rosters/ORL.json");
let PHI = require("../../assets/rosters/PHI.json");
let PHX = require("../../assets/rosters/PHX.json");
let POR = require("../../assets/rosters/POR.json");
let SAC = require("../../assets/rosters/SAC.json");
let SAS = require("../../assets/rosters/SAS.json");
let TOR = require("../../assets/rosters/TOR.json");
let UTA = require("../../assets/rosters/UTA.json");
let WAS = require("../../assets/rosters/WAS.json");

const roster = [
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

exports.findRosters = async (req, res) => {
  try {
    if (roster) {
      res.status(200).json({ data: roster });
    }
  } catch (err) {
    console.log(err);

    res.status("400").json({ message: "Could not fetch rosters" });
  }
};

exports.findRosterByABV = async (req, res) => {
  const { id } = req.params.id;
  try {
    let rosters = roster.filter((roster) => roster.key === id);
    if (rosters) {
      res.status(200).json({ data: rosters });
    }
  } catch (err) {
    console.log(err);

    res.status("400").json({ message: "Could not fetch selected roster" });
  }
};
