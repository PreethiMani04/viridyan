const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: "Startup route working" });
});

module.exports = router;
