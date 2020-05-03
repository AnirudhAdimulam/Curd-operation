import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Home from './components/home';
import sample from './images/sample.jpg';
import sample2 from './images/sample2.jpg';
import sample3 from './images/sample3.jpg';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import './App.css';
//import Footer from './components/Footer';

const Home = () =>
{
  return(
    <div class="hello">
                <h1 >Fire flys presents</h1>
                <p>Events around the world which is the most famous summer camp events organiser</p>
                <button  class="btn1"  ><Link to="/create">Create camper</Link></button>
                <button class="btn1"><Link to="/index">Campers List</Link></button>
                
                
          <div class="row">
          <div class="col s1">
            <div class="card">
              <div class="card-image">
              <img src={sample} alt="error"/>
                <span class="card-title">Beach Side Camp</span>
              </div>
              <div class="card-content">
                <h6>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</h6>
              </div>
              
            </div>
          </div>
        
        
      
        
               
          <div class="col s1">
            <div class="card">
              <div class="card-image">
              <img src={sample2} alt="error"/>
                <span class="card-title">Dark night</span>
              </div>
              <div class="card-content">
                <h6>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</h6>
              </div>
              
            </div>
          </div>
       
        
       
          <div class="col s1 ">
            <div class="card">
              <div class="card-image">
              <img src={sample3} alt="error"/>
                <span class="card-title">Family times</span>
              </div>
              <div class="card-content">
                <h6>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</h6>
              </div>
              
            </div>
          </div>
        </div>
        </div>
      
  )
}


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Fire Flys Summer Camps</Link>
            <div >
              <ul className="navbar-nav ">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
          <Route path="/" exact  component = {Home}/>
              <Route path='/create' exact component={ Create } />
              <Route path='/edit/:id' exact component={ Edit } />
              <Route path='/index' exact component={ Index } />
          </Switch>
      
        


 




        </div>
       
      </Router>
      
    );
  }
}

export default App;
