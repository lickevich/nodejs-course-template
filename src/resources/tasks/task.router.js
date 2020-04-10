const router = require('express').Router();
const tasksService = require('./task.service');

router.route('/:boardId/tasks/').get(async (req, res) => {
  const boardId = req.params.boardId;
  const tasks = await tasksService.getAllByBoardId(boardId);
  res.json(tasks);
});

router.route('/:boardId/tasks/:id').get(async (req, res) => {
  const id = req.params.id;
  const boardId = req.params.boardId;
  const task = await tasksService.getById(id, boardId);
  if (task === undefined) {
    res.status(404).json({
      message: 'Task is not found'
    });
  } else {
    res.json(task);
  }
});

router.route('/:boardId/tasks/').post(async (req, res) => {
  const task = req.body;
  const boardId = req.params.boardId;
  task.boardId = boardId;
  const newTask = await tasksService.createTask(task);
  res.json(newTask);
});

router.route('/:boardId/tasks/:id').put(async (req, res) => {
  const id = req.params.id;
  const boardId = req.params.boardId;
  const task = req.body;
  task.id = id;
  task.boardId = boardId;
  await tasksService.updateTask(task);
  res.json(task);
});

router.route('/:boardId/tasks/:id').delete(async (req, res) => {
  const id = req.params.id;
  const boardId = req.params.boardId;
  await tasksService.deleteTask(id, boardId);
  res.status(204).json({ message: 'Task deleted' });
});

module.exports = router;
