const express = require("express");
const images = require('../../assets/nbaImages.json')
const router = express.Router();
router.get("/images",   (req, res) => {
    res.status(200).json({ data: images });
  });

router.get("/images/:id", (req, res)=> { 
    const { id } = req.params.id;

  let images = images.filter((images) => images.key === id);

    res.status(200).json({ data: images });
});

module.exports = router;
