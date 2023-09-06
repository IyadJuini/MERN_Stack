import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age,
        };
    }
    increaseAge = () => {
        this.setState({ age: this.state.age + 1 }, () => 
        console.log(this.state.age)
        );
    }
    render() {
        return (
            <div className='App'>
                <fieldset>
                    <legend>🔥🔥🔥🔥🔥personCrd🔥🔥🔥🔥🔥</legend>
                    <>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair color: {this.props.hairColor}</p>
                <button onClick = {this.increaseAge}>
                    Birthday button for {this.props.firstName}{""}
                    {this.props.lastName}
                </button>
            </>
                </fieldset>
            </div>
            );
    }
}

export default PersonCard 