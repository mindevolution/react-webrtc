import React from 'react';
import setClient from './client';

class App extends React.Component {
  componentDidMount() {
    setClient();
  }
  render() {
    return (
      <div className="video">
        <h1>Video</h1>
        <video autoPlay></video> 
      </div>
    );
  }
}

export default App;