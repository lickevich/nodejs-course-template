/* eslint-disable no-unused-vars */
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const { handleError } = require('./helpers/error');
const logger = require('./helpers/logger');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

process
  .on('uncaughtException', (err, origin) => {
    logger.log(
      'error',
      `Caught exception: ${err}. Exception origin: ${origin}`
    );
  })
  .on('unhandledRejection', (reason, promise) => {
    logger.log(
      'error',
      `Unhandled Rejection at: ${promise}. Reason: ${reason}`
    );
  });

app.use((req, res, next) => {
  const { method, url, params, body } = req;
  logger.log(
    'info',
    `${method} ${url} ${JSON.stringify(params)} ${JSON.stringify(body)}`
  );
  next();
});

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards', taskRouter);
app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
