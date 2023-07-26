
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  firstname: String,
  lastname: String,
  password: { type: String },
  dateofbirth: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
