import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CreateSongs from './components/createsongs';
import ReadSongs from './components/ReadSongs';
import RecentCharts from './components/recentcharts';
import topArtist from './components/topArtist';
import button from 'react-bootstrap/Button';
import Edit from './components/editsong';




class App extends React.Component {




  render() {
    return (

      <div className="app">
      <h1 text-allign = "top">Welcome to  the Song Center</h1>
      <h4>Add songs to your own library<br></br>View the most recent charts<br></br>View the top streamed artists </h4>


   <Router>
      
            <Nav className="mr-auto">
          
              <Nav.Link href="/createsongs"> <button className="Button"> Add Songs</button></Nav.Link>
              <Nav.Link href="/ReadSongs"> <button className="Button"> View your music</button></Nav.Link>
              <h4> Need Inspiration? </h4>
              <Nav.Link href="/recentcharts"> <button className="Button">View the recent charts!</button></Nav.Link>
              <Nav.Link href="/topArtist"> <button className="Button">View all the most streamed artist!</button></Nav.Link>
            </Nav>
        
            <Route path="/createsongs" component={CreateSongs} />
            <Route path="/ReadSongs" component={ReadSongs} />
            <Route path="/recentcharts" component={RecentCharts} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/topArtist" component={topArtist} />
      </Router>
      </div>
    );
  }
}

export default App;
