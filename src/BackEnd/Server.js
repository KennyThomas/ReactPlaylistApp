const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://Admin:Admin@cluster0-bn617.mongodb.net/test?retryWrites=true&w=majority'; //MongoDb server
mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const SongSchema = new Schema({
    SongName: String,
    ArtistName: String,
    SongURL: String,
    Genre: String,
    Name: String
})

const SongModel = mongoose.model('Songs', SongSchema);




app.post('/api/Songs', (req, res) => {

    SongModel.create({
        SongName: req.body.SongName,
        ArtistName: req.body.ArtistName,
        SongURL: req.body.SongURL,
        Genre: req.body.Genre,
        Name: req.body.Name
    });
})

app.get('/api/Songs', (req, res) => { //find all data
 
    SongModel.find((error, data) => {
        res.json({ Songs: data });
      
    })

})


app.delete('/api/Songs/:id', (req, res) => {  //delete
    console.log(req.params.id);

    SongModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);

        })
})


app.put('/api/Songs/:id', (req, res) => {

    console.log("Edit: " + req.params.id);
    console.log(req.body);

    SongModel.findByIdAndUpdate(req.params.id, req.body, { new: true },  //used for update
        (err, data) => {
            res.json(data);
        })
})





app.get('/api/Songs/:id', (req, res) => {

    console.log(req.params.id);
    SongModel.findById(req.params.id, (error, data) => {  //get song by id 

        res.json(data);






    });
})







app.listen(port, () => console.log(`Example app listening on port ${port}!`))