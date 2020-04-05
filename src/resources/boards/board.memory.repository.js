const { Column, Board } = require('./board.model');

const boards = [
  new Board({
    id: '1',
    title: 'board1',
    columns: [
      new Column({ id: '1', title: 'column1 b1', order: '1' }),
      new Column({ title: 'column2 b1', order: '2' })
    ]
  }),
  new Board({
    id: '2',
    title: 'board2',
    columns: [
      new Column({ id: '2', title: 'column1 b2', order: '1' }),
      new Column({ title: 'column2 b2', order: '2' })
    ]
  }),
  new Board({
    title: 'board3',
    columns: [
      new Column({ title: 'column1 b3', order: '1' }),
      new Column({ title: 'column2 b3', order: '2' })
    ]
  })
];

const getAll = async () => {
  return boards;
};

const getId = async id => {
  return boards.find(board => board.id === id);
};

const createBoard = async board => {
  const newBoard = await new Board(board);
  await boards.push(newBoard);

  return newBoard;
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

const updateBoard = async (id, update) => {
  const myBoard = await boards.find(board => board.id === id);
  await mergeItems(myBoard, update);
};

const deleteBoard = async id => {
  const myBoard = await boards.find(board => board.id === id);
  const idx = await boards.indexOf(myBoard);
  await boards.splice(idx, 1);
};

module.exports = { getAll, getId, createBoard, updateBoard, deleteBoard };
