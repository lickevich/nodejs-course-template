const Task = require('./task.model');

const getAllByBoardId = async boardId => {
  return Task.find({ boardId });
};

const getAllByUserId = async userId => {
  return Task.find({ userId });
};

const getById = async (_id, boardId) => {
  return Task.findOne({ _id, boardId });
};

const createTask = async task => {
  return Task.create(task);
};

const updateTask = async taskToUpdate => {
  return Task.updateOne({ _id: taskToUpdate.id }, taskToUpdate);
};

const deleteTask = async (id, boardId) => {
  return (await Task.deleteOne({ _id: id, boardId })).ok;
};

module.exports = {
  getAllByBoardId,
  getAllByUserId,
  getById,
  createTask,
  updateTask,
  deleteTask
};
