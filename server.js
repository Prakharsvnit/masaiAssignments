const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/web10mongoose',{
        useNewUrlParser :true,
        useUnifiedTopology: true,
        useCreateIndex :true
    })
}

const movieSchema = new mongoose.Schema({
    movie_name : String,
    movie_genre : String,
    production_year : Number,
    budget:Number
},{
    versionKey : false
})

const Movie = mongoose.model('movie',movieSchema);


//add a new movie
app.post("/movies",async function(req,res){
    const movie = await Movie.create(req.body);
    return res.send(movie);
})

//see all movies
app.get("/movies",async function(req,res){
    const movies = await Movie.find().lean().exec(); //doesn't return a proper promise,so use exec
    return res.send(movies);
})

//get movie by mongo_id
app.get("/movies/:id",async function(req,res){
    const movie = await Movie.findById(req.params.id).lean().exec();
    return res.send(movie);
})

//update movie
app.patch("/movies/:id",async function(req,res){
    const movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new : true});
    return res.send(movie);
})


//delete movie
app.delete("/movies/:id",async function(req,res){
    const movie = await Movie.findByIdAndDelete(req.params.id);
    return res.send(movie);
})

app.listen(2345,async () => {
    await connect();
    console.log("listening on port 2345");
})