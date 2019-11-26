import React from 'react';
import axios from 'axios';

class EditSong extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            SongName: '',
            ArtistName: '',
            SongURL: '',
            Genre: '',
            Name: '',
            _id: ''


        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSongName = this.handleSongName.bind(this);
        this.handleArtistName = this.handleArtistName.bind(this);
        this.handleSongURl = this.handleSongURl.bind(this);
        this.handleGenre = this.handleGenre.bind(this);
        this.handleName = this.handleName.bind(this);
    }




    componentDidMount() {
        axios.get('http://localhost:4000/api/Songs/' + this.props.match.params.id) // gets the song by id
            .then((response) => {
                this.setState({
                    _id: response.data._id,
                    SongName: response.data.SongName,
                    ArtistName: response.data.ArtistName,
                    SongURL: response.data.SongURL,
                    Genre: response.data.Genre,
                    Name: response.data.Name
                })
            })
            .catch();


    }
    handleSongName(e) {
        this.setState({ SongName: e.target.value });
    }

    handleArtistName(e) {
        this.setState({ ArtistName: e.target.value });
    }
    handleSongURl(e) {
        this.setState({ SongURL: e.target.value });
    }
    handleGenre(e) {
        this.setState({ Genre: e.target.value });
    }

    handleName(e) {
        this.setState({ Name: e.target.value });
    }

    handleSubmit(e) {
        alert("Song info updated");
        e.preventDefault();

        const newSong = {

            SongName: this.state.SongName,
            ArtistName: this.state.ArtistName,
            SongURL: this.state.SongURL,
            Genre: this.state.Genre,
            Name: this.state.Name


        }

        axios.put('http://localhost:4000/api/Songs/' + this.state._id,
            newSong)
            .then()
            .catch();


        this.setState({
            SongName: '',
            ArtistName: '',
            SongURL: '',
            Genre: '',
            Name: ''



        });
    }


    render() {
        return (

            <div>

                <h1 className="H1">Update Song Info</h1>
                <form onSubmit={this.handleSubmit} className="ViewSongs">
                    <div>
                        <div className='form-group' >

                            <h4>Song Name</h4>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.SongName}
                                onChange={this.handleSongName}
                            ></input>


                            <h4>Artist Name</h4>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.ArtistName}
                                onChange={this.handleArtistName}
                            ></input>


                            <h4>Song URL</h4>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.SongURL}
                                onChange={this.handleSongURl}
                            ></input>



                            <h4>what Genre is the song ?</h4>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Genre}
                                onChange={this.handleGenre}
                            ></input>
                        </div>

                        <h4>Added by ?</h4>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.handleName}
                        ></input>




                    </div>

                    <div>
                        <input
                            type="submit" className="Button"
                            value="Update Song Info">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}



export default EditSong;