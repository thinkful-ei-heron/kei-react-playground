import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { count: this.props.count }
  }
  handleButtonClick = () => {
    console.log('props in handleButtonClick', this.props.steps)
    console.log('state in handleButtonClick', this.state)
    this.setState({ count: this.state.count + this.props.steps })
  }
  state = {
    count: 0
  };
  handleButtonClick = () => {
    const newCount = this.state.count + this.props.steps
    this.setState({
      count: newCount
    })
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>
          Add {this.props.steps}
        </button>
      </div>
    )
  }
  static defaultProps = {
    steps: 1
  }
}

export default Counter