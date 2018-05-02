import React, { Component } from 'react'
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Felix', age: 66 },
      { id: 2, name: 'Sunamelia', age: 64 },
      { id: 3, name: 'Urso', age: 66 }
    ],
    showPersons: false,
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.name} />
          })}
        </div>
      );
      
      
    }


    return (
      <div>
        <h1> Hola</h1>
        {/*<button onClick={this.switchNameHandler.bind(this, 'Felix Urso')} > Switch Name </button> */}
        <button
          style={style}
          onClick={() => this.togglePersonsHandler()} > Toggle Persons </button>
        {persons}


      </div>
    );
  }
}


export default App;