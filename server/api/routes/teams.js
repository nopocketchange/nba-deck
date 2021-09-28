const express = require("express");
const teamsController = require('../controllers/teams')
const router = express.Router();
router.get("/teams",  teamsController.findTeams);

router.get("/teams/:id",  teamsController.findTeamsByABV);

module.exports = router;