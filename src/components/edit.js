import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';
class edit extends React.Component{


 constructor(){

super();

this.state = {
    Playlists: []
};


 }

 componentDidMount() {
    axios.get('http://localhost:4000/api/PlaylistInfo')
    .then((response)=>{
        this.setState({Playlists: response.data.Playlists})
    })
    .catch((error)=>{
        console.log(error);
    });
}



   render() {
    var{Playlists} = this.state;
    return (
      <ul>
{Playlists.map(playlist=>  (

<li key={playlist._id}>
<h3>playlist created by</h3>
{playlist.Username}
<br></br>
<h4>Playlist</h4>
<h5>Name</h5>
{playlist.PlaylistName}

<h3>Add a song to your playlist</h3>






</li>

))}
      </ul>




    );
  }
}




export default edit;