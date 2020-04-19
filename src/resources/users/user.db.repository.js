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
  return (await User.deleteOne({ _id: id })).ok;
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser
};
