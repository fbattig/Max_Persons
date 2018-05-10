import React, { Component } from 'react';

import Person from '../Persons/Person/Person';
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
      let buttonClass =' ';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
              changed={(event) => this.changeNameHandler(event, person.id)}
              clicked = {() => this.deletePersonHandler(index)}
         
              name    = {person.name}
              age     = {person.name} 
              key      = {person.id }
              />
          })}
        </div>
      );
       buttonClass= classes.Red;
     
    }

    const Assignedclasses = [];
    if(this.state.persons.length <= 2) {
      Assignedclasses.push(classes.red);
    }
    if(this.state.persons.length<=1){
      Assignedclasses.push(classes.bold);
    }

    return (
     
        <div className={classes.App}>
          <h1> I'm a react Application</h1>
          <p className={Assignedclasses.join(' ')} > this is really working </p>
          {/*<button onClick={this.switchNameHandler.bind(this, 'Felix Urso')} > Switch Name </button> */}
          <button
            className = {buttonClass}
            onClick={() => this.togglePersonsHandler()} > Toggle Persons </button>
          {persons}
        </div>
     
    );
  }
}


export default App;