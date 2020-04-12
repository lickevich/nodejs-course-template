const User = require('./user.model');

const users = [];

const getAll = async () => {
  return users;
};

const getById = async id => {
  return users.find(user => user.id === id);
};

const createUser = async user => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

const updateUser = async userUpdate => {
  const index = users.findIndex(user => user.id === userUpdate.id);
  users[index] = userUpdate;
  return index !== -1;
};

const deleteUser = async id => {
  const index = users.findIndex(user => user.id === id);
  users.splice(index, 1);
  return index !== -1;
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
