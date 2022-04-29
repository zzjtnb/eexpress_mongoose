const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/add', (req, res) => {
  const {name, age} = req.body;
  if (!name || !age) return res.status(400).json({code: 400, msg: '参数错误'});
  User.create({name: name, age: age}, (err, doc) => {
    if (err) return res.status(500).json({code: 500, msg: '服务器错误'});
    res.status(200).json({code: 200, msg: '添加成功'});
  });
});
router.delete('/delete', (req, res) => {
  const {id} = req.body;
  if (!id) return res.status(400).json({code: 400, msg: '参数错误'});
  User.findByIdAndDelete(id, (err, doc) => {
    console.log(doc);
    if (err) return res.status(500).json({code: 500, msg: '服务器错误'});
    if (!doc) return res.status(404).json({code: 404, msg: '用户不存在'});
    res.status(200).json({code: 200, msg: '删除成功'});
  });
});
router.delete('/delete/all', (req, res) => {
  User.remove({}, (err, doc) => {
    console.log(err, doc);
    if (err) return res.status(500).json({code: 500, msg: '服务器错误'});
    res.status(200).json({code: 200, msg: '删除成功'});
  });
});
const db = require('../config/db');
const test = db.model('Users');
router.put('/edit', (req, res) => {
  const {id, name, age} = req.body;
  if (!id) return res.status(400).json({code: 400, msg: '参数错误'});
  User.findByIdAndUpdate(id, {name: name, age: age, ddd: 'ddd'}, (err, doc) => {
    if (err) return res.status(500).json({code: 500, msg: '服务器错误'});
    if (!doc) return res.status(404).json({code: 404, msg: '用户不存在'});
    res.status(200).json({code: 200, msg: '修改成功'});
  });
});
router.get('/', (req, res) => {
  User.find({}, (err, doc) => {
    console.log(doc);
    if (err) return res.status(500).json({code: 500, msg: '服务器错误'});
    res.status(200).json({code: 200, msg: '查询成功', data: doc});
  });
});
router.get('/info', (req, res) => {
  const {name} = req.query;
  if (!name) return res.status(400).json({code: 400, msg: '参数错误'});
  User.find({name: name}, (err, doc) => {
    if (err) return res.status(500).json({code: 500, msg: '服务器错误'});
    res.status(200).json({code: 200, msg: '查询成功', data: doc});
  });
});
module.exports = router;
