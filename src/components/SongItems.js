import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class SongItem extends React.Component{

  constructor(){
    super();
    this.DeleteSong= this.DeleteSong.bind(this);
  }

  DeleteSong(e){
    alert("you just deleted the song " + this.props.song.SongName);
    axios.delete("http://localhost:4000/api/Songs/"+this.props.song._id)
    .then()
    .catch();

  }

    render(){
        return(
          
<div>
            <h3>Song</h3>
           <div className="ViewSongs">
            
            <ul>
            <h3>Song Name </h3>
            {this.props.song.SongName}
            <br></br>
            
            <h3>Artist Name </h3>
            {this.props.song.ArtistName}
            <br></br>
            
            <h3>Song URL</h3>
            {this.props.song.SongURL}
            <br></br>
            
            <h3>Genre</h3>
            {this.props.song.Genre}
            <br></br>
            
            <h3>Added by </h3>
            {this.props.song.Name}
            <br></br>
            <br></br>
            
            
            <button onClick={this.DeleteSong}> Delete Movie</button>
            
            
            </ul>
            </div>

            </div>
       
        );
      }
    }

export default SongItem;