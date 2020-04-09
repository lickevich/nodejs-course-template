const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const boardId = req.params.boardId;
  const tasks = await tasksService.getAllByBoardId(boardId);
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  const boardId = req.params.boardId;
  const task = await tasksService.getById(id, boardId);
  if (task === undefined) {
    res.status(404).json({
      message: `Task with id ${id} and boardId ${boardId} is not found`
    });
  } else {
    res.json(task);
  }
});

router.route('/').post(async (req, res) => {
  const task = req.body;
  const boardId = req.params.boardId;
  task.boardId = boardId;
  const newTask = await tasksService.createTask(task);
  res.json(newTask);
});

router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const boardId = req.params.boardId;
  const task = req.body;
  task.id = id;
  task.boardId = boardId;
  await tasksService.updateTask(task);
  res.json(task);
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  const boardId = req.params.boardId;
  await tasksService.deleteTask(id, boardId);
  res.status(204).json({ message: `Task id: ${id} was deleted` });
});

module.exports = router;
