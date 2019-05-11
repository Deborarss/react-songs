import React, { Component } from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SongList />
        <SongDetail />
      </div>
    );
  }
}

export default App;
