const router = require("express").Router();
const  controller = require("../controllers/todoController")

router.get("/", controller.getAllTodoTask)

module.exports = router