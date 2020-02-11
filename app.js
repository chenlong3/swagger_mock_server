const express = require('express');
const app = express();
const coframe = require('./src/router/coframe');
const mock = require('./src/router/mock');

const port = process.env.PORT || 3000

app.use('/', mock);
app.use('/coframe', coframe);

app.listen(port, () => {
  console.log(`server is listening ${port}`)
});