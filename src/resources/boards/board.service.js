const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('./../tasks/task.memory.repository');

const getAll = async () => await boardsRepo.getAll();
const getById = async id => await boardsRepo.getById(id);
const createBoard = async board => await boardsRepo.createBoard(board);
const updateBoard = async board => await boardsRepo.updateBoard(board);
const deleteBoard = async id => {
  await boardsRepo.deleteBoard(id);
  const tasks = await tasksRepo.getAllByBoardId(id);
  tasks.forEach(async task => await tasksRepo.deleteTask(task.id, id));
};

module.exports = { getAll, getById, createBoard, updateBoard, deleteBoard };
