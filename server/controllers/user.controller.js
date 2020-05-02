const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userCtrl = {};

userCtrl.signup = async (req, res, next) => {

    const emailExist = await User.findOne({
        email: req.body.email
    });
    //Checking if the email is already in the database
    if (emailExist) {
        return res.status(400).send("Email already exists")
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //Create new user
    const user = new User({
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        const savedUser = await user.save();
        return res.status(200).send("Registered user")
    } catch (error) {
        return res.status(400).send(error)
    }
};

userCtrl.login = async (req, res, next) => {

    //Checking if the user is already in the database
    const user = await User.findOne({
        email: req.body.email
    });

    if (!user) {
        return res.status(400).send("Email is not found")
    }

    //Checking if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) {
        return res.status(400).send("Invalid password")
    }

    //Assign a JWT token
    const token = jwt.sign({
        _id: user._id
    }, process.env.SECRET_KEY);

    const body = {
        access_token: token
    }

    return res.status(200).send(body)
};

module.exports = userCtrl;