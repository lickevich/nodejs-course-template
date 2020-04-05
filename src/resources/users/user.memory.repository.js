const User = require('./user.model');

const users = [
  new User({ id: '1', name: 'Roman', login: 'roman', password: '2020' }),
  new User({ id: '2', name: 'Karl', login: 'karl2020', password: '20120' }),
  new User()
];

const getAll = async () => {
  return users;
};

const getId = async id => {
  return users.find(user => user.id === id);
};

const createUser = async user => {
  const newUser = await new User(user);
  await users.push(newUser);

  return newUser;
};

const mergeItems = (item, update) => {
  const updateKeys = Object.keys(update);

  for (const key in item) {
    if (updateKeys.includes(key)) {
      item[key] = update[key];
    }
  }

  return item;
};

const updateUser = async (id, update) => {
  const myUser = await users.find(user => user.id === id);
  const mergeUser = await mergeItems(myUser, update);

  return mergeUser;
};

const deleteUser = async id => {
  const myUser = await users.find(user => user.id === id);
  const idx = await users.indexOf(myUser);
  await users.splice(idx, 1);
};

module.exports = { getAll, getId, createUser, updateUser, deleteUser };
