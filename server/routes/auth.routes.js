const Router = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const router = new Router();

router.post(
  '/registration',
  [
    check('email', 'incorrect email').isEmail(),
    check('password', 'incorrect password').isLength({ min: 3, max: 12 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return res.status(400).json({message: 'incorrect request', errors})
      }
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: `User with email ${email} already exists` });
      }
      const hashPassword = await bcrypt.hash(password, 15);
      const user = new User({ email, password: hashPassword });
      await user.save();
      return res.json({ message: 'user was created' });
    } catch (e) {
      console.log(e);
    }
  }
);

module.exports = router
