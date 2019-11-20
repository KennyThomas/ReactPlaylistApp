import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Songs from './components/songs';
import View from './components/view';
import RecentCharts from './components/recentcharts';
import TopCharts from './components/topcharts';
import Edit from './components/edit';
import button from 'react-bootstrap/Button';




class App extends React.Component {




  render() {
    return (

      <div className="app">
      <h1 text-allign = "top">Welcome to  the Song Center</h1>
      <h4>Add songs to your own library<br></br>View the most recent charts</h4>


   <Router>
      
            <Nav className="mr-auto">
          
              <Nav.Link href="/songs"> <button className="Button"> Add Songs</button></Nav.Link>
              <Nav.Link href="/view"> <button className="Button"> View your music</button></Nav.Link>
              <Nav.Link href="/edit"> <button className="Button"> Edit/delete in your library</button></Nav.Link>
              <h4> Need Inspiration? </h4>
              <Nav.Link href="/recentcharts"> <button className="Button">View the recent charts</button></Nav.Link>
              <Nav.Link href="/topcharts"> <button className="Button">View the all time charts</button></Nav.Link>
            </Nav>
        
            <Route path="/songs" component={Songs} />
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
