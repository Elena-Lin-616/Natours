//no longer use export.checkID middleware to parameter, because MongoDB have id to handle
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

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};
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
exports.createTour = (req, res) => {
  // console.log(req.body);
  // const newID = tours.at(-1).id + 1;
  // const newTour = Object.assign({ id: newID }, req.body);
  // tours.push(newTour);
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         tour: newTour,
  //       },
  //     });
  //   }
  // );
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
