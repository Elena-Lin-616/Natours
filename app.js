const express = require('express');
// todo 1: create and start a server
const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
