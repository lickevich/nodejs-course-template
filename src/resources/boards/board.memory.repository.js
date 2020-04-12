const Board = require('./board.model');

const boards = [];

const getAll = async () => {
  return boards;
};

const getById = async id => {
  return boards.find(user => user.id === id);
};

const createBoard = async board => {
  const newBoard = new Board(board);
  boards.push(newBoard);
  return newBoard;
};

const updateBoard = async boardUpdate => {
  const index = boards.findIndex(board => board.id === boardUpdate.id);
  boards[index] = boardUpdate;
  return index !== -1;
};

const deleteBoard = async id => {
  const index = boards.findIndex(board => board.id === id);
  boards.splice(index, 1);
  return index !== -1;
};

module.exports = { getAll, getById, createBoard, updateBoard, deleteBoard };
