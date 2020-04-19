const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
};

const getById = async id => {
  return Board.findById(id);
};

const createBoard = async board => {
  return Board.create(board);
};

const updateBoard = async boardToUpdate => {
  return Board.updateOne({ _id: boardToUpdate.id }, boardToUpdate);
};

const deleteBoard = async id => {
  return (await Board.deleteOne({ _id: id })).ok;
};

module.exports = { getAll, getById, createBoard, updateBoard, deleteBoard };
