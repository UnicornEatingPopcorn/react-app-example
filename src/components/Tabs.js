import React, { Component } from 'react'

class Tabs extends Component {
  render() {
    const {characterData} = this.props;
    const tabs = characterData.map((tab, index)=>{
      return (
        <ul>
          <li key={index}><a>{tab}</a></li>
        </ul>
      )
    })
  return <div className="tabs">{tabs}</div>
  }
}

export default Tabs
