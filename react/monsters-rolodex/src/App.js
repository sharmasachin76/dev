import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList}  from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import {DropDown} from './components/drop-down/drop-down.component';

// class is preferred over function to have state of object.
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:     [],
      searchField:  '',
      dropDown:     'set6'
    };
    // either use below or define handleChange as arrow function
    // this.handleChange = this.handleChange.bind(this);
  }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=>this.setState ({monsters:users})); 
    }

    //handleChange(e){ defined as arrow function to avoid binding of this
    handleChange= e => {
    this.setState( {searchField: e.target.value});
  }

  handleOption= e => {
    this.setState( {dropDown: e.target.value});
  }

  render(){

    const { monsters,searchField,dropDown} = this.state; 
    const filteredMonsters = monsters.filter (
          monster=>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
          );

    filteredMonsters.forEach (
          monster=>monster.email = dropDown 
          );

    return(
      <div className="App">
        <h1>Characters Rolodex</h1>
       <DropDown handleOption={this.handleOption} />
       <br/>
        <SearchBox
          placeholder='Search Characters'
          handleChange={this.handleChange} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

/*

{
       this.state.monsters.map(monster=> <h1 key={monster.id}>
          { monster.name}</h1>)
     }
     
-----
 
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {this.state.string} </p>
        <button
          onClick={()=>this.setState({string: 'Hello Guest!!!'})}>
             Click me !! 
        </button>
      </header>

-------
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hello World !!!
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React quickly
        </a>
      </header>
    </div>
  );
}

*/

export default App;
