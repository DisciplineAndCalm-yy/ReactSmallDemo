import React, { Component } from 'react';
import './style/component.less';

class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
}

export default App;
