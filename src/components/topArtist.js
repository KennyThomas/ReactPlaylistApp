import React from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { isTemplateElement } from '@babel/types';

class topArtist extends React.Component{
constructor(props){
    super(props);
   this.state = {
        artists: []
    };
}
 
    componentDidMount() {
        axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=0d1afd69d8af4e8f7271690adf77b635&format=json')
        .then((response)=>{
            this.setState({artists: response.data.artists.artist})
          
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
        var{artists} = this.state;
        return (
          <ul>
{artists.map(artist=>  (
    

<li key={artist.name}>
<div className="ViewSongs">
<h2>Artist  Name</h2>
{artist.name}
<h3>Songs Playcount</h3>
{artist.playcount}
<h3>Number of Listeners</h3>
{artist.listeners}
<br></br>
</div>




</li>

))}
          </ul>
        );
      }
    }

export default topArtist;