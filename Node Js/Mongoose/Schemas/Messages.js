
const mongoose = require('mongoose');


const messagesSchema = new mongoose.Schema({
  uid: String,
  date: String,
  message: String,
  sender: String,
});

// const Message = mongoose.model('Message', messageSchema);
const Messages = mongoose.model('Message', messagesSchema);

module.exports = Messages;
