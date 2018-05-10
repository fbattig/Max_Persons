import React, { Component } from 'react';

import Persons from '../Persons/Persons';
import CockPit from '../Cockpit/Cockpit';
import classes from './App.css';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Felix', age: 66 },
      { id: '2', name: 'Sunamelia', age: 64 },
      { id: '3', name: 'Urso', age: 66 }
    ],
    showPersons: false,
  }

 

  changeNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
       return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name= event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({ persons: persons });
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

      let persons = null;
      
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
          />
         
        </div>
      );
       
    }

  
    return (
     
        <div className={classes.App}>
        <CockPit 
            showPersons= {this.state.showPersons}
            persons={this.state.persons}
            clicked ={this.togglePersonsHandler}

         />
         {persons}
        </div>
     
    );
  }
}


export default App;