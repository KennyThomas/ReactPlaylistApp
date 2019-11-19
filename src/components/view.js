import React from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { isTemplateElement } from '@babel/types';

class view extends React.Component{
constructor(props){
    super(props);
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
    
<li key={playlist.id}>
<h3>playlist created by</h3>
{playlist.Username}
<br></br>
<h4>Playlist</h4>
<h5>Name</h5>
{playlist.PlaylistName}




</li>

))}
          </ul>
        );
      }
    }

export default view;