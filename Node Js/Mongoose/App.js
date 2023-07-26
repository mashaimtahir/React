
const mongoose = require('mongoose');
const express = require('express');
const User = require('./Schemas/User');
const app = express();
const https = require('https');
const fs = require('fs');
const Messages = require('./Schemas/Messages');
const Message = require('./Schemas/Messages');
const router = express.Router();
mongoose.set('strictQuery', false);

const uri = 'mongodb://localhost:27017/whatsapp';


mongoose.connect(uri).then((res) => console.log('Mongodb Connected')).catch((err) => console.error(err));

app.use(express.json())
app.use(require('cors')())

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
// app.listen(8000, '192.168.25.207', () => {
//   console.log('Listening on ip 192.168.25.207 and port 8000');
// });

app.post('/', (req, res) => {
  // console.log('req.body');
  // console.log(req.body);
  // console.log(req.params);
  res.json(req.body);
})

app.post('/read', async (req, res) => {
  const users = await User.find();
  const messages = await Messages.find();
  // console.log(users);
  res.send({users, messages});
})

app.post('/MessageRead', async (req, res) => {
  // const reg = new Regex('/*' + req.body.username + '*/')
const messages = await Messages.find({$or: [{sender: req.body.username},{reciever: req.body.username}]})
  console.log(messages);
  res.send(messages);
})

app.post('/MessageWrite', async (req, res) => {
  // const messages = new Messages();
  const messages = new Messages({
    reciever: req.body.reciever,
    sender: req.body.username,
    date: req.body.date,
    message: req.body.message,
  });
  messages.save((err, message) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).send(messages);
  })
  res.send('Success');
})

app.post('/verify', async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  console.log('req.body');
  console.log({ username: username, password: password });
  console.log(req.body);
  const users = await User.findOne({username: username, password: password});
  console.log(users);
  res.send(users);
})

app.post('/register', (req, res) => {
  const newUser = new User();
  console.log(req.body);
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  newUser.firstname = req.body.firstname;
  newUser.lastname = req.body.lastname;
  newUser.save((err, savedUser) => {
    if (err) {
      console.error(err);
      return res.status(500).send();
    }
    return res.status(200).send(savedUser);
  });
  res.send('Hi');
})
