const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

//Register
router.post("/register", async (req,res) => {
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
    })
    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})

//Login
router.post("/login" , async (req,res) => {
    try{
        const user = await User.findOne({email:req.body.email})
        !user && res.status(401).json("Wrong password or username");

        const bytes = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);

        originalText !== req.body.password && res.status(401).json("Wrong password or username")

        const accessToken = jwt.sign({
            id:user._id, isAdmin: user.isAdmin
        }, process.env.PASS_SEC, {expiresIn:"5d"})

        const {password, ...info} = user._doc;
        res.status(200).json({...info,accessToken});
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;