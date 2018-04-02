const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    year: String,
    poster: String,
    likes: {type: Number, default: 0}
});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;
