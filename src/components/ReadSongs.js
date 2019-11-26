import React from 'react'
import Songs from './Songs';
import axios from 'axios';


class ReadSongs extends React.Component {

    state = {
        Songs: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/Songs')
            .then((response) => {
                this.setState({ Songs: response.data.Songs })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {          //outputs the songs ss
        return (


            <div>

                <h1 className="H1">Your Library</h1>
                <Songs mySongs={this.state.Songs}></Songs> 
            </div>
        );
    }
}
export default ReadSongs;