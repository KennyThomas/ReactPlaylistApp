import React from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { isTemplateElement } from '@babel/types';

class RecentCharts extends React.Component{
constructor(props){
    super(props);
   this.state = {
        songs: []
    };
}
 
    componentDidMount() {
        axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=0d1afd69d8af4e8f7271690adf77b635&format=json')
        .then((response)=>{
            this.setState({songs: response.data.tracks.track})
            this.setState({songs: response.data.tracks.track.artist.name})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
        var{songs} = this.state;
        return (
          <ul>
{songs.map(track=>  (
    
<li key={track.name}>
<h2>Artist name</h2>
{track.artist.name}
<h3>Song Title</h3>
{track.name}
<h3>Times Streamed</h3>
{track.playcount}
<br></br>





</li>

))}
          </ul>
        );
      }
    }

export default RecentCharts;