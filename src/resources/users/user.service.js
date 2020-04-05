const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getId = id => usersRepo.getId(id);
const createUser = user => usersRepo.createUser(user);
const updateUser = (id, update) => usersRepo.updateUser(id, update);
const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, getId, createUser, updateUser, deleteUser };
