import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Playlist extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {PlaylistName:'',
                      Username:'',
                 
                  
                  };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlaylistName = this.handlePlaylistName.bind(this);
        this.handleUsername= this.handleUsername.bind(this);
    
       
      }
      
      handlePlaylistName(e){
        this.setState({PlaylistName: e.target.value});
      }
       
      handleUsername(e){
        this.setState({Username: e.target.value});
      }
    
    


      handleSubmit(e){
        alert("Playlist Created");
        e.preventDefault();
    
        const newPlaylist = {
    
         PlaylistName : this.state.PlaylistName,
        Username: this.state.Username
      
      
        }
        
                        axios.post('http://localhost:4000/api/PlaylistInfo' , newPlaylist)
                        .then()
                        .catch();
          
        this.setState({Username:'',
                    PlaylistName:''
                  
                 

                  });
                }  
      
    
      render() {
        return (
            <div>
        <h1>Create a Playlist</h1>
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
    
       <h4>Username</h4>
          <input
          type='text'
          className='form-control'
          value={this.state.Username}
          onChange={this.handleUsername}
          ></input>
        </div>


        <div className='form-group'>
            <h4>Playlist name </h4>
          <input
          type='text'
          className='form-control'
          value={this.state.PlaylistName}
          onChange={this.handlePlaylistName}
          ></input>
        </div>



        <div>
          <input
          type="submit"
          value="Create">
          </input>
        </div>
        </form>
      </div>
    );
  }
}

export default Playlist;
