import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {


    const Assignedclasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }


    if (props.persons.length <= 2) {
        Assignedclasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        Assignedclasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1> I'm a react Application</h1>
            <p className={Assignedclasses.join(' ')} > this is really working </p>

            <button
                className={btnClass}
                onClick={props.clicked} > Toggle Persons </button>
        </div>
    )
};

export default cockpit;