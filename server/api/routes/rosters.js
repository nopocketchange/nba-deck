const express = require("express");
const rostersController = require('../controllers/rosters')
const router = express.Router();
router.get("/rosters",  rostersController.findRosters);

router.get("/rosters/:id",  rostersController.findRosterByABV);

module.exports = router;
