const uuid = require('uuid');

class Column {
  constructor({ id = uuid(), title = 'column', order = 'order' } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

class Board {
  constructor({ id = uuid(), title = 'board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = { Column, Board };
