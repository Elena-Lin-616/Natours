const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
// console.log(process.env);

// todo: connect mongodb with express
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log('DB connect successful');
  });

// todo: create a document based on model
const testTour = new Tour({
  name: 'The hiking adventure',
  rating: 4.9,
  price: 230,
});

testTour
  .save()
  .then((doc) => console.log(doc))
  .catch((err) => console.log(`😞 there is some error : ${err}`));

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
