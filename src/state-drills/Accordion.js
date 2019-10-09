import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  }
  state = {
    currentOpenTab: null,
    //open: false
  }  

  handleButtonClick(index) {
    this.setState( {currentOpenTab: index} )
  }

  renderLi = () => {
    return this.props.sections.map( (element, index) => (
      <li key={index} className="Accordion-item">
        <button onClick={() => this.handleButtonClick(index)}>
          {element.title}
        </button>
        {index===this.state.currentOpenTab && this.renderContent()}
      </li>
      )
    )
  }

  renderContent = () => {
    const currentTab = this.props.sections[this.state.currentOpenTab]
    //this.setState({open: true})
    return (
      <p className='content'>
        {currentTab.content}
      </p>
    )
  }

  render () {
    return (
      <ul>
        {this.renderLi()}
      </ul>
    )
  }
}

export default Accordion;