import React, { Component } from 'react'
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Felix', age: 66 },
      { name: 'Sunamelia', age: 64 },
      { name: 'Urso', age: 66 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Felix Battig', age: 67 },
        { name: 'Sunamelia', age: 64 },
        { name: 'Urso Weber', age: 65 }
      ]
    }
    )
  }

  render() {
    return (
      <div>
        <h1> Hola</h1>
        <button onClick={this.switchNameHandler} > Switch Name </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} 
          clicked ={this.switchNameHandler }
          >
          I like cooking</Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div>
    );
  }
}


export default App;