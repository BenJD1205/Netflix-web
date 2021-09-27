const router = require('express').Router();
const Movie = require('../models/Movie');
const CryptoJS = require("crypto-js");
const {verify} = require('./verifyToken');

//Create
router.post("/",verify ,async (req,res) => {
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body);
        try{
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You are not allowed");
    }
})

//update
router.put("/:id",verify ,async (req,res) => {
    if(req.user.isAdmin){
        try{
            const updateddMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set:req.body
            }, {new:true});
            res.status(200).json(updateddMovie);
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You are not allowed");
    }
})

//Delete
router.delete("/:id",verify ,async (req,res) => {
    if(req.user.isAdmin){
        try{
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie has been deleted...");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You are not allowed");
    }
})

//Get a movie
router.get("/find/:id",verify ,async (req,res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    }catch(err){
        res.status(500).json(err);
    }
})

//Get random
router.get("/random",verify ,async (req,res) => {
    const type = req.query.type;
    let movie;
    try{
        if(type==="series"){
            movie = await Movie.aggregate([
                {$match:{isSeries:true}},
                {$sample:{size:1}},
            ])
        }else{
            movie = await Movie.aggregate([
                {$match:{isSeries:false}},
                {$sample:{size:1}},
            ])
        }
        res.status(200).json(movie);
    }catch(err){
        res.status(500).json(err);
    }
})

//Get all
router.get("/", verify, async (req, res) => {
    if(req.user.isAdmin){
        try{
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You are not allowed");
    }
});

module.exports = router;