const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getId = id => boardsRepo.getId(id);
const createBoard = board => boardsRepo.createBoard(board);
const updateBoard = (id, update) => boardsRepo.updateBoard(id, update);
const deleteBoard = id => boardsRepo.deleteBoard(id);

module.exports = { getAll, getId, createBoard, updateBoard, deleteBoard };
