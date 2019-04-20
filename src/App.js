import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Will", age: 48},
      {name: "Kobe", age: 12},
      {name: "Brook", age: 10} 
    ]
  }

  switchNameHandler= () =>{
   // Dont do this -- this.state.persons[0].name = "Willard";
   this.setState({persons:[
    {name: "Willard", age: 48},
    {name: "Kobe", age: 13},
    {name: "Broolyn", age: 10} 

   ]})

  }

  render() {
     return (
       <div className="App">
        <h1>Hi, I'm A React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name ={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name ={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name ={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
     );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;
