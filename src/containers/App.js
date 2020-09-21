import React, { Component } from 'react';
import PersonList from '../components/PersonList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      people: [],
      searchfield: ''
    }
  }
  componentDidMount(){
    fetch('https://swapi.dev/api/people/')
    .then(results => results.json())
    .then(people => this.setState({people: people.results}));
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  render() {
    const {people, searchfield} = this.state;
    const filteredPeople = people.filter(person => {
      return(
        person.name.toLowerCase().includes(searchfield.toLowerCase())
      )
    })
    return !people.length ?
      <h1>Loading</h1> :
      (
      <div className='tc'>
        <h1 className='f1'>star<br/>wars</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <PersonList people={filteredPeople}/>
      </div>
      );
  }
}

export default App;
