const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  const board = await boardsService.getById(id);
  if (board === undefined) {
    res.status(404).json({ message: 'Board is not found' });
  } else {
    res.json(board);
  }
});

router.route('/').post(async (req, res) => {
  const board = req.body;
  const newBoard = await boardsService.createBoard(board);
  res.json(newBoard);
});

router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const board = req.body;
  board.id = id;
  await boardsService.updateBoard(board);
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  await boardsService.deleteBoard(id);
  res.status(204).json({ message: 'Board deleted' });
});

module.exports = router;
