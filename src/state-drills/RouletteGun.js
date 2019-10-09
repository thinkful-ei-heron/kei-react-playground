import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bulletInChamber: this.props.bulletInChamber }
  }

  checkChamber = () => {
    if (this.props.chamber > 8 || this.props.chamber < 1){
      Math.ceil(Math.random() * 8);
    }
  }

  handleButtonClick = () => {
    const newCount = this.state.count + this.props.steps
    this.setState({
      count: newCount
    })
  }

  rendeResult = () => {
    if (this.state.count >=8){
      //clearInterval(this.interval)
      return <div><p>BOOM!!!!</p></div>
    } else if (this.state.count %2===0){
      return <div><p>Tick</p></div>
    } else {
      return <div><p>Tock</p></div>
    }

  }

  handleButtonClick = () => {
    const newCount = this.state.count + this.props.steps
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Pull the trigger!</button>
        <p></p>
      </div>
    )
  }
  static defaultProps = {
    bulletInChamber: 8
  }
}

export default RouletteGun