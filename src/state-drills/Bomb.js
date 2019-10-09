import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 };
    console.log('constructor')
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      let newCount = this.state.count + 1
      if (newCount > 8){
        newCount = 0;
      }
      this.setState({
        count: newCount
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    if (this.state.count >=8){
      //clearInterval(this.interval)
      return <div><p>BOOM!!!!</p></div>
    } else if (this.state.count %2===0){
      return <div><p>Tick</p></div>
    } else {
      return <div><p>Tock</p></div>
    }
  }
}
export default Bomb