const express = require('express');
const app = express();

app.get('/', (req, res) => {
  //   res.status(200).send('Hello from server');
  res.status(200).json({ message: 'Hello from server', app: 'natours' });
});

app.post('/', (req, res) => {
  res.status(200).json('You can post your data to this endpoint');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
