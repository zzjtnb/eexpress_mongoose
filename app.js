const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require('./routes');
app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).json({
    code: 404,
    msg: '接口不存在',
  });
});

app.listen(port, 'localhost', () => {
  console.log(`Server is running on http:localhost:${port}`);
});
