const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://Admin:Admin@cluster0-bn617.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const userSchema = new Schema({
    PlaylistName:String,
    Username:String,
    SongName:String,
    SongArtist:String,
    SongURL:String
})

const PlaylistModel = mongoose.model('Playlist', userSchema);




app.post('/api/PlaylistInfo', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.Fname);
    console.log(req.body.Sname);
    console.log(req.body.username);
    

    PlaylistModel.create({
        PlaylistName:req.body.PlaylistName, 
        Username:req.body.Username, 
        SongName:req.body.SongName,
        SongURL:req.body.SongURL
    });
})

    app.get('/api/PlaylistInfo', (req, res) => {

        PlaylistModel.find((error, data) =>{
            res.json({Playlists:data});
            //console.log(data);
        })
      
    })



app.listen(port, () => console.log(`Example app listening on port ${port}!`))