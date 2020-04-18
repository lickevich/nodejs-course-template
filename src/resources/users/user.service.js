const usersRepo = require('./user.db.repository');
const tasksRepo = require('./../tasks/task.db.repository');

const getAll = async () => await usersRepo.getAll();
const getById = async id => await usersRepo.getById(id);
const createUser = async user => await usersRepo.createUser(user);
const updateUser = async user => await usersRepo.updateUser(user);
const deleteUser = async id => {
  const deletedUser = usersRepo.deleteUser(id);
  const tasks = await tasksRepo.getAllByUserId(id);
  tasks.forEach(async task => {
    task.userId = null;
    await tasksRepo.updateTask(task);
  });
  return deletedUser;
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
