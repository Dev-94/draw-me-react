import React from 'react';
import RandomPage from './Pages/RandomPage';
import './App.css';

class App extends React.Component {
  state = [
    adjective = {
      1: 'funny',
      2: 'string',
      3: 'lazy',

    },
    noun = {
      1: 'dog',
      2: 'elephant',
      3: 'house',


    }
  ];

  // var randomAdjective = Math.random(this.state.adjective)
  // var randomNoun = Math.random(this.state.noun)





  render() {

    return (

      <div className="App" >
        <RandomPage randomAdjective={this.state.randomAdjective} randomNoun={this.state.randomNoun} />
      </div>


    );

  }
}

export default App;
