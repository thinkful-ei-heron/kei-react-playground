import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = { who: " "}
  }

  render() {
    return (
      <div>
        <p>{this.state.who}</p>
        <button onClick={() => {this.setState({who: 'Hello, friend!'})}}>
          Friend
        </button>
        <button onClick={() => {this.setState({who: 'Hello, React!'})}}>
          React
        </button>
        <button onClick={() => {this.setState({who: 'Hello, World!'})}}>
          World
        </button>
      </div>
    )
  }
}

export default HelloWorld