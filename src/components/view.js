import React from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { isTemplateElement } from '@babel/types';

class view extends React.Component{
constructor(props){
    super(props);
   this.state = {
        Songs: []
    };
}
 
    componentDidMount() {
        axios.get('http://localhost:4000/api/Songs')
        .then((response)=>{
            this.setState({Songs: response.data.Songs})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
       
        var{Songs} = this.state;
      
        return (

          <ul>
               <h1>Your Library</h1>
{Songs.map(song=>  (
 
 <div className="ViewSongs">
<li key={song._id}>

<h3>Song Name </h3>
{song.SongName}
<br></br>

<h3>Artist Name </h3>
{song.ArtistName}
<br></br>

<h3>Song URL</h3>
{song.SongURL}
<br></br>

<h3>Genre</h3>
{song.Genre}
<br></br>

<h3>Added by </h3>
{song.Name}
<br></br>
<br></br>




</li>

</div>
))}
          </ul>
        );
      }
    }

export default view;