const Task = require('./task.model');

const tasks = [];

const getAllByBoardId = async boardId => {
  return tasks.filter(task => task.boardId === boardId);
};

const getAllByUserId = async userId => {
  return tasks.filter(task => task.userId === userId);
};

const getById = async (id, boardId) => {
  return tasks.find(task => task.id === id && task.boardId === boardId);
};

const createTask = async task => {
  const newTask = new Task(task);
  tasks.push(newTask);
  return newTask;
};

const updateTask = async taskUpdate => {
  const index = tasks.findIndex(task => task.id === taskUpdate.id);
  tasks[index] = taskUpdate;
};

const deleteTask = async (id, boardId) => {
  const index = tasks.findIndex(
    task => task.id === id && task.boardId === boardId
  );
  tasks.splice(index, 1);
};

module.exports = {
  getAllByBoardId,
  getAllByUserId,
  getById,
  createTask,
  updateTask,
  deleteTask
};
