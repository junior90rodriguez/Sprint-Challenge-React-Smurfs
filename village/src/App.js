import React from 'react';
import axios from "axios";
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:3333/smurfs")
    .then(response => this.setState({ smurfs: response.data }))
    .catch(error => console.log(error))
  }

  addSmurf = smurf => {
    axios 
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => this.setState({ smurfs: response.data }));
    this.props.history.push("/")
    .catch(error => console.log(error))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <nav>
        <NavLink to="/">Smurfs</NavLink>
        <NavLink to="/smurf-form">Add Smurf</NavLink>
      </nav>
      <Route  path="/smurf-form" render={props => 
        <SmurfForm {...props} addSmurf={this.addSmurf} />
      }/>
      <Route exact path="/" render={props => 
        <Smurfs {...props} smurfs={this.state.smurfs} />
      }/>
      </div>
    );
  }
}

export default App;
