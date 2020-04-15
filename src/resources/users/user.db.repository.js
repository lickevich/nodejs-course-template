const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getById = async id => {
  return User.findById(id);
};

const createUser = async user => {
  return User.create(user);
};

const updateUser = async userToUpdate => {
  return User.updateOne({ _id: userToUpdate.id }, userToUpdate);
};

const deleteUser = async id => {
  const result = (await User.deleteOne({ _id: id })).deletedCount;
  return result === 1;
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
