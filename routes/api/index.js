const path = require("path");
const router = require("express").Router();
const pairRoutes = require("./pairs");

// graph pair routes
router.use("/pairs", pairRoutes);

// anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
