import React from 'react';
import RandomPage from './Pages/RandomPage';
import Nav from './Components/Nav';
import './App.css';

class App extends React.Component {







  render() {

    return (

      <div className="App" >
        <Nav />
        <RandomPage />
      </div>


    );

  }
}

export default App;
