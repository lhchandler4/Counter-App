import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Simple Counter</h1>
    </header>
  )
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: 'nothing to see here'
    }
  }

  handleWord = e => {
    let words = e.target.value;
    this.setState({ words });
  }

  handleClick = e => {
    e.preventDefault();
    let words = this.state.words
      .split('')
      .reverse()
      .join('');

    this.setState({ words });
  }

  render() {
    return (
      <section>
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWord} />
        <button onClick={this.handleClick}>onClick</button>
      </section>
    )
  }
} 

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}

export default App;
