import nextConnect from 'next-connect';
const mongoose = require('mongoose');
const {secret} = require('../../components/secret.js');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');

const User = mongoose.model('users');
mongoose.connect('mongodb://127.0.0.1/mysite');

const handler = nextConnect()

.post(async (req, res) => {
  const body = JSON.parse(req.body)
  const { name, password } = body;

  const allUsers = await User.findOne({
      name: name
  });

  if (allUsers === null) {
   return res.status(201).json({ message: 'loginError' });
 }

   const validPassword = bcrypt.compareSync(password, allUsers.password);

   if (!validPassword) {
      return res.status(201).json({ status: 'loginError' });
   }
   return res.status(202).json({ status: 'ok' });
})


export default handler
