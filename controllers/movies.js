const express = require('express');
const router = express.Router();
const Movies = require('../models/movies.js');

router.get('/', (req, res) => {
    Movies.find({}, (err, foundMovies) => {
        res.json(foundMovies);
    });
});

router.post('/', (req, res) => {
    Movies.create(req.body, (err, createdMovies) => {
        res.json(createdMovies);
    });
});

router.delete('/:id', (req, res) => {
    Movies.findByIdAndRemove(req.params.id, (err, deletedMovie)=>{
        res.json(deletedMovie)
    });
});

router.put('/:id', (req, res)=>{
    Movies.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMovie)=>{
        res.json(updatedMovie)
    });
});

module.exports = router;
