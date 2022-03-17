import nextConnect from 'next-connect';
const mongoose = require('mongoose');
const {secret} = require('../../components/secret.js');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');

const User = mongoose.model('users');
mongoose.connect('mongodb://127.0.0.1/mysite');

const handler = nextConnect()

.post(async(req, res) => {
  const body = JSON.parse(req.body)
    const { name, password } = body;

    const allUsers = await User.findOne({
        name: name
    });

    if (allUsers !== null) {
     return res.status(201).json({ message: 'find' });
   }

    const hashPassword = bcrypt.hashSync(password, 7);

    const user = new User({
      name: name,
      password: hashPassword,
    });

    await user.save();

    const payload = body;
    const token = jwt.encode(payload, secret);

    console.log(token);

    return res.status(200).json({
      status: 'success',
      message: 'done'
    });
})


export default handler
