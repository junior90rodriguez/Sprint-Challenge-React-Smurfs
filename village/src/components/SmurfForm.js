import React from 'react';

class SmurfForm extends React.Component {
  state= {
      smurf: {
      name: '',
      age: '',
      height: ''
    }
  }
  
  changeHandler = e => {
    e.persist();

    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }
    
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }))
  }

  handleSubmit= event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state.smurf)

    this.setState({smurf: {
      name: '',
      age: '',
      height: ''
    }});
  }
  
  

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            placeholder="Age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.changeHandler}
            placeholder="Height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
