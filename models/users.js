const db = require('../config/db');

const childSchema = new db.Schema({
  address: String,
});
const UserSchema = new db.Schema({
  name: String,
  age: Number,
  child: {
    type: childSchema,
    default: () => ({}),
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
UserSchema.set('toObject', {virtuals: true});
const User = db.model('Users', UserSchema);
// User.watch().on('change', (change) => {
//   console.log('数据发生变化', change);
// });
module.exports = User;
