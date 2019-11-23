import React from 'react';
import RandomPage from './Pages/RandomPage';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      adjective: '',
      noun: ''
    }
    var randomAdjective = Math.random(this.state.adjective)
    var randomNoun = Math.random(this.state.noun)
  }






  render() {

    return (

      <div className="App" >
        <RandomPage randomAdjective={this.state.randomAdjective} randomNoun={this.state.randomNoun} />
      </div>


    );

  }
}

export default App;
