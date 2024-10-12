const User = require("../models/user.model");
const CryptoJS = require("crypto-js");  
const jwt = require('jsonwebtoken');

module.exports = {
    createUser: async (req, res, next) => {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString(),  // Use AES encryption
        });
        try {
            await newUser.save();
            res.status(201).json({
                status: true,
                message: "User Created Successfully"
            });
        } catch (err) {
            console.log(err);
            return next(err);
        }
    },

    loginUser: async (req, res, next) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(401).json({
                    status: false,
                    message: "User not found."
                });
            }
            const decPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
            const decString = decPassword.toString(CryptoJS.enc.Utf8);
            if (decString !== req.body.password) {
                return res.status(401).json({
                    status: false,
                    message: "Email or Password are incorrect"
                });
            }
            const userToken = jwt.sign(
                {
                    id: user._id
                }, process.env.JWT_SECRET, { expiresIn: '1d' }
            );
            res.status(200).json({
                status: true,
                id: user._id,
                token: userToken
            });
        } catch (err) {
            console.log(err);
            return next(err);
        }
    }
}
