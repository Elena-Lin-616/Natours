//no longer use export.checkID middleware to parameter & body
// ! because mongodb will do the validation check automatically if we set the require or others
// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);
//   if (val > tours.length - 1) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'invalid id',
//     });
//   }
//   next();
// };
// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price',
//     });
//   }
//   next();
// };

const Tour = require('./../models/tourModel');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    // body: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    // body: {
    //   tour,
    // },
  });
};
exports.createTour = async (req, res) => {
  try {
    // old way to create a document based on model
    // const newTour = new Tour(req.body);
    // newTour.save(); //return promise

    // return promise
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    // body: {
    //   tour,
    // },
  });
};
exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: 'success',
    body: null,
  });
};
