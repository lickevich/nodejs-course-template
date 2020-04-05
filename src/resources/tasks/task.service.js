const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const getId = id => tasksRepo.getId(id);
const createTask = task => tasksRepo.createTask(task);
const updateTask = (id, update) => tasksRepo.updateTask(id, update);
const deleteTask = id => tasksRepo.deleteTask(id);

module.exports = { getAll, getId, createTask, updateTask, deleteTask };
