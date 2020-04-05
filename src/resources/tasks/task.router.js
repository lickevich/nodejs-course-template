const router = require('express').Router();
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const boards = await tasksService.getAll();

  res
    .set('Accept', 'application/json')
    .status(200)
    .contentType('application/json')
    .json(boards);
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getId(req.params.id);

  res
    .set('Accept', 'application/json')
    .status(200)
    .contentType('application/json')
    .json(task);
});

router.route('/').post(async (req, res) => {
  const newTask = await tasksService.createTask(req.body);

  res
    .set('Accept', 'application/json')
    .status(200)
    .contentType('application/json')
    .json(newTask);
});

router.route('/:id').put(async (req, res) => {
  const id = await req.params.id;
  const updateTask = await tasksService.updateTask(id, req.body);

  res
    .set('Accept', 'application/json')
    .status(204)
    .contentType('application/json')
    .json(updateTask);
});

router.route('/:id').delete(async (req, res) => {
  const id = await req.params.id;
  const deleteTask = await tasksService.deleteTask(id);

  res
    .set('Accept', 'application/json')
    .status(204)
    .contentType('application/json')
    .json(deleteTask);
});

module.exports = router;
