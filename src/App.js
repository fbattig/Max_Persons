import React, { Component } from 'react';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      {  name: 'Felix', age: 66 },
      {name: 'Sunamelia', age: 64 },
      {  name: 'Urso', age: 66 }
    ],
    showPersons: false,
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

deletePersonHandler =(personId)=> {
  //const persons = this.state.persons.slice();
  const persons =[...this.state.persons];
  persons.splice(personId, 1);
  this.setState( {persons: persons});
}

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
          {this.state.persons.map( (person, index) => {
            return <Person
              name={person.name}
              age={person.name} 
              clicked={()=>this.deletePersonHandler(index)}
              />
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