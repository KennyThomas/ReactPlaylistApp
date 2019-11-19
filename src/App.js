import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Playlist from './components/playlist';
import View from './components/view';
import RecentCharts from './components/recentcharts';
import TopCharts from './components/topcharts';
import Edit from './components/edit';
import button from 'react-bootstrap/Button';




class App extends React.Component {




  render() {
    return (

      <div className="app">
      <h1 text-allign = "top">Welcome to  the Music Center</h1>
      <h4>Create your own playlists <br></br>View the most recent charts</h4>


   <Router>
      
            <Nav className="mr-auto">
          
              <Nav.Link href="/playlist"> <button className="Button"> Create a playlist</button></Nav.Link>
              <Nav.Link href="/view"> <button className="Button"> View playlists</button></Nav.Link>
              <Nav.Link href="/view"> <button className="Button"> Add/delete to playlist</button></Nav.Link>
              <h4> Need Inspiration? </h4>
              <Nav.Link href="/recentcharts"> <button className="Button">View the recent charts</button></Nav.Link>
              <Nav.Link href="/topcharts"> <button className="Button">View the all time charts</button></Nav.Link>
            </Nav>
        
            <Route path="/playlist" component={Playlist} />
            <Route path="/view" component={View} />
            <Route path="/recentcharts" component={RecentCharts} />
            <Route path="/edit" component={Edit} />
            <Route path="/topcharts" component={TopCharts} />
      </Router>
      </div>
    );
  }
}

export default App;
