const Router = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const router = new Router();

router.post(
  '/registration',
  [
    check('email', 'incorrect email').isEmail(),
    check('password', 'incorrect password').isLength({ min: 3, max: 12 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'incorrect request', errors });
      }
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).send({ message: `User with email ${email} already exists` });
      }
      const hashPassword = await bcrypt.hash(password, 7);
      const user = new User({ email, password: hashPassword });
      await user.save();
      return res.json({ message: 'user was created' });
    } catch (e) {
      console.log(e);
    }
  }
);

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: `User with email ${email} doesn't exist` });
    }

    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid) {
      return res.status(400).send({ message: 'invalid password' });
    }

    const token = jwt.sign({ id: user.id }, config.get('secretKey'), { expiresIn: '5d' });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
        avatar: user.avatar,
      },
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
