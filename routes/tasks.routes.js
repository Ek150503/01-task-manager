const router = require("express").Router();
const {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} = require("./../controller/tasks.controller");

router.route("/").get(getTasks).post(addTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
