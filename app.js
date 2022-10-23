const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
// todo 1: create and start a server
// todo 2: handle HTTP method: CRUD
// todo 3: understand and use middleware and request & response cycle
const app = express();
// use 3rd party middleware
app.use(morgan('dev'));

// create own middlerware
app.use((req, res, next) => {
  console.log('Hello from request-response cycle');
  next();
});

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    body: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }
  res.status(200).json({
    status: 'success',
    body: {
      tour,
    },
  });
};
const createTour = (req, res) => {
  console.log(req.body);
  const newID = tours.at(-1).id + 1;
  const newTour = Object.assign({ id: newID }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
const updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      body: {
        message: 'Invalid ID',
      },
    });
  }
  res.status(200).json({
    status: 'success',
    body: {
      tour,
    },
  });
};
const deleteTour = (req, res) => {
  const id = req.params.id * 1;

  if (id > tours.length - 1) {
    return res.status(404).json({
      status: 'fail',
      body: {
        message: 'Invalid ID',
      },
    });
  }
  res.status(200).json({
    status: 'success',
    body: null,
  });
};
app.route('/api/v1/tours').get(getAllTours).post(createTour);
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

const port = 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
