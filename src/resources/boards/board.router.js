const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();

  res
    .set('Accept', 'application/json')
    .contentType('application/json')
    .status(200)
    .json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getId(req.params.id);

  res
    .set('Accept', 'application/json')
    .contentType('application/json')
    .status(200)
    .json(board);
});

router.route('/').post(async (req, res) => {
  const newBoard = await boardsService.createBoard(req.body);

  res
    .set('Accept', 'application/json')
    .contentType('application/json')
    .status(200)
    .json(newBoard);
});

router.route('/:id').put(async (req, res) => {
  const id = await req.params.id;
  const updateBoard = await boardsService.updateBoard(id, req.body);

  res
    .set('Accept', 'application/json')
    .contentType('application/json')
    .status(200)
    .json(updateBoard);
});

router.route('/:id').delete(async (req, res) => {
  const id = await req.params.id;
  const deleteBoard = boardsService.deleteBoard(id);

  res
    .set('Accept', 'application/json')
    .contentType('application/json')
    .status(200)
    .json(deleteBoard);
});

module.exports = router;
