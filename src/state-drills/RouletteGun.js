import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      chamber: null,
      spinningTheChamber: false
    }
  }

  checkChamber = () => {
    if (this.props.chamber > 8 || this.props.chamber < 1){
      this.setState({
        bulletInChamber: Math.ceil(Math.random() * 8)
      })
    }
  }

  renderResult = () => {
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
    this.setState({
      spinningTheChamber: true,
      chamber: Math.ceil(Math.random() * 8)
    })
    this.timeout = setTimeout(() => {
      this.setState({
        spinningTheChamber: false
      });
      console.log(this.state.chamber);
    }, 2000) 
  }

  renderResults = () => {
    if (this.state.chamber !== null){
      if (this.state.spinningTheChamber) {
        return <p>spinning the chamber and pulling the trigger! ...</p>
      } 
      if (this.state.chamber === this.props.bulletInChamber){
        return <p>BANG!!!!</p>
      } else {
        return <p>You're safe!</p>
      }  
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>
          Pull the trigger!
        </button>
        {this.renderResults()}
      </div>
    )
  }

  static defaultProps = {
    chamber: 8
  }

}

export default RouletteGun