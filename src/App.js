import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import './App.css';

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

    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

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
      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className='App'>
          <h1> I'm a react Application</h1>
          <p className={classes.join(' ')} > this is really working </p>
          {/*<button onClick={this.switchNameHandler.bind(this, 'Felix Urso')} > Switch Name </button> */}
          <button
            style={style}
            onClick={() => this.togglePersonsHandler()} > Toggle Persons </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}


export default Radium(App);