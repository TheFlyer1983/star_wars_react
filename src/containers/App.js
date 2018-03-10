import React, { Component } from 'react';
import PersonList from '../components/PersonList';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      people: []
    }
  }
  componentDidMount(){
    fetch('https://swapi.co/api/people/')
    .then(results => results.json())
    .then(people => this.setState({people: people.results}));
  }
  render() {
    const {people} = this.state;
    return (
      <div className='tc'>
        <h1 className='f1'>star<br/>wars</h1>
        <PersonList people={people}/>
      </div>
    );
  }
}

export default App;
