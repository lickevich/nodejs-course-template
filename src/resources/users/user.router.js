const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  const user = await usersService.getById(id);
  if (user === undefined) {
    res.status(404).json({ message: `User with id ${id} is not found` });
  } else {
    res.json(User.toResponse(user));
  }
});

router.route('/').post(async (req, res) => {
  const user = req.body;
  const newUser = await usersService.createUser(user);
  res.json(User.toResponse(newUser));
});

router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  user.id = id;
  await usersService.updateUser(user);
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  await usersService.deleteUser(id);
  res.status(204).json({ message: `User id: ${id} was deleted` });
});

module.exports = router;
