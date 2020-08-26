const router = require("express").Router();
const pairController = require("../../controllers/pairController");

// matches with "/api/pairs"
router.route("/")
  .get(pairController.findAll)
  .post(pairController.create);
  
// Matches with "/api/pairs/:id"
router.route("/:id")
  .get(pairController.findById)
  .put(pairController.update)
  .delete(pairController.remove);

module.exports = router;
