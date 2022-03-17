import nextConnect from 'next-connect';
const mongoose = require('mongoose');

const User = mongoose.model('users');
mongoose.connect('mongodb://127.0.0.1/mysite');

const handler = nextConnect()

.post(async(req, res) => {
  const body = JSON.parse(req.body)
    const { currentName, newName } = body;

    const allUsers = await User.findOne({
        name: newName
    });

    if (allUsers != null) {
     return res.status(201).json({ message: 'find' });
   }

    const update = await User.findOneAndUpdate(
    {
      name: currentName
    },
    {
      name: newName
    }
  );

    return res.status(200).json({
      status: 'success',
      message: 'done',
      data: newName,
    });
})


export default handler
