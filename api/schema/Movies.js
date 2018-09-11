const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    year: Number,
    rating: Number,
    genre: String,
    director: String,
    certificate: String,
    duration: String,
    summary: String,
    review: String,
    thumbnailImage: String,
    bannerImage: String
})

module.exports = mongoose.model('movies', movieSchema)

