import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <header>
        <h1>Luke's Very Simple Counter</h1>
      </header>
    )
    }  
}

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  handlePlus = e => {
    e.preventDefault();
    let count = this.state.count + 1;
    this.setState({ count });
  }

  handleMinus = e => {
    e.preventDefault();
    let count = this.state.count - 1;
    this.setState({ count });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handlePlus}>+</button>
      </div>
    )
  }
} 

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    )
  }
}

export default App;
