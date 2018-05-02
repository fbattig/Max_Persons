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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 67 },
        { name: 'Sunamelia', age: 64 },
        { name: 'Urso Weber', age: 65 }
      ]
    }
    )
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Yo', age: 67 },
        { name: event.target.value, age: 64 },
        { name: 'Urso Weber', age: 65 }
      ]
    }
    )
  }


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };


    return (
      <div>
        <h1> Hola</h1>
        {/*<button onClick={this.switchNameHandler.bind(this, 'Felix Urso')} > Switch Name </button> */}
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Felix Urso Battig Weber')} > Switch Name </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          clicked={this.switchNameHandler.bind(this, 'Felix Battig')}
          changed={this.changeNameHandler}
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