import React from 'react';
import SongItem from './SongItems';

class Songs extends React.Component{

    render(){
        return this.props.mySongs.map((song)=>{
            //console.log({movie});
            return <SongItem key={song._id} song={song}></SongItem>
        });
    }
}
export default Songs;