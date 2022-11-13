const router = require("express").Router();
const  controller = require("../controllers/todoController")

router
  .get("/", controller.getAllTodoTask)
  .get("/:id", controller.getTodo)
  .post("/", controller.createTodoTask)
  .put("/:id", controller.updateTodoTask)
  .delete("/:id", controller.deleteTodoTask)

module.exports = router;