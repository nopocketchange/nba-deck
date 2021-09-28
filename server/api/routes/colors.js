const express = require("express");
const colors = require('../../assets/data.json')
const router = express.Router();
router.get("/colors",   (req, res) => {
    res.status(200).json({ data: colors });
  });

router.get("/colors/:id", (req, res)=> { 
    const { id } = req.params.id;

  let color = colors.filter((color) => color.key === id);

    res.status(200).json({ data: color });
});

module.exports = router;
