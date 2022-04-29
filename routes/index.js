const express = require('express');
const router = express.Router();

const useRouter = require('./user');

router.get('/', (req, res, next) => {
  res.send('用户测试接口');
});

router.use('/user', useRouter);
module.exports = router;
