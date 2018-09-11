const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app= express()

const moviesRoute = require('./api/routes/movies')



mongoose.connect('mongodb://kaxp:kapilsahu232@ds237192.mlab.com:37192/movie_detail')
.then(result => console.log('connected to mongoDB'))
.catch(err => console.log('err.message :', err.message))


app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use('/movies', moviesRoute)

// USE
// GET  
// POST 
// PATCH
// DELETE

app.listen(4000, ()=>{
    console.log('the app is running on port 4000')
})
