const mongoose = require('mongoose');
const url = 'mongodb+srv://test:test@cluster0.rrdjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(url)
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch((err) => {
    console.log('数据库连接失败', err);
  });
module.exports = mongoose;
