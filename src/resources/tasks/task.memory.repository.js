const Task = require('./task.model');

const tasks = [
  new Task({
    id: '1',
    title: 'Task 1',
    order: '1',
    description: 'Caesar cipher CLI tool',
    userId: '1',
    boardId: '1',
    columnId: '1'
  }),
  new Task({
    id: '2',
    title: 'Task 2',
    order: '2',
    description: 'Express REST service',
    userId: '2',
    boardId: '2',
    columnId: '2'
  }),
  new Task({
    title: 'Task 3',
    order: '2',
    description: 'Logging & Error Handling'
  })
];

const getAll = async () => {
  return tasks;
};

const getId = async id => {
  return tasks.find(task => task.id === id);
};

const createTask = async task => {
  const newTask = await new Task(task);
  await tasks.push(newTask);

  return newTask;
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

const updateTask = async (id, update) => {
  const myTask = await tasks.find(task => task.id === id);
  await mergeItems(myTask, update);
};

const deleteTask = async id => {
  const myTask = await tasks.find(task => task.id === id);
  const idx = await tasks.indexOf(myTask);
  await tasks.splice(idx, 1);
};

module.exports = { getAll, getId, createTask, updateTask, deleteTask };
