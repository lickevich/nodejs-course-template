const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  res
    .set('Accept', 'application/json')
    .contentType('application/json')
    .status(200)
    .json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const id = await req.params.id;
  const user = await usersService.getId(id);

  res
    .set('Accept', 'application/json')
    .contentType('application/json')
    .status(200)
    .json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const newUser = await usersService.createUser(req.body);

  res
    .set('Accept', 'application/json')
    .contentType('application/json')
    .status(200)
    .json(User.toResponse(newUser));
});

router.route('/:id').put(async (req, res) => {
  const id = await req.params.id;
  const updateUser = await usersService.updateUser(id, req.body);

  res
    .set('Accept', 'application/json')
    .contentType('application/json')
    .status(200)
    .json(User.toResponse(updateUser));
});

router.route('/:id').delete(async (req, res) => {
  const id = await req.params.id;
  const deleteUser = usersService.deleteUser(id);

  res
    .set('Accept', 'application/json')
    .contentType('application/json')
    .status(200)
    .json(User.toResponse(deleteUser));
});

module.exports = router;
