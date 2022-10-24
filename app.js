const express = require('express');

const morgan = require('morgan');

const tourRoute = require('./routes/tourRoutes');
const userRoute = require('./routes/userRoutes');

// todo 1: create and start a server
// todo 2: handle HTTP method: CRUD
// todo 3: understand and use middleware and request & response cycle
// todo 4: refactor to build a better file strucutre
const app = express();

// use 3rd party middleware
app.use(morgan('dev'));

// create own middlerware
app.use((req, res, next) => {
  console.log('Hello from request-response cycle');
  next();
});

app.use(express.json());

// serve static file from file system, instead of route
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);

module.exports = app;
