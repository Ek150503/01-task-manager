const Tasks = require("./../models/tasks");

const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

const addTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).send({ task });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

const getTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Tasks.findOne({ _id: taskId });

    if (!task) {
      return res.status(404).json({
        msg: `No task with id ${taskId}`,
      });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Tasks.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({
        msg: `No task with id ${taskId}`,
      });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Tasks.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(404).json({
        msg: `No task with id ${taskId}`,
      });
    }

    res.status(200).json({ task: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
