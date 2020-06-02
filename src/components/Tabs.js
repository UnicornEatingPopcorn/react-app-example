import React, { Component } from 'react'

class Tabs extends Component {
  render() {
    const {characterData} = this.props;
    const result = characterData.map((tab, index)=>{
      return (
        <ul>
          <li key={tab.index} className={tab.isActive ? "is-active" : ""}><a>{tab.name}</a></li>
        </ul>
      )
    })
    return <div className="tabs">{result}</div>
  }
}

  export default Tabs
