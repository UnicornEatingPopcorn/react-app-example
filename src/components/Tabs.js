import React, { Component } from 'react'

class Tabs extends Component {
  render() {
   const tabs = [
      {name:'프로필', isActive: false},
      {name:'계정', isActive:false},
      {name:'결제수단', isActive:false},
      {name:'배송지', isActive:true},
      {name:'알림', isActive: false}
    ]
    const result = tabs.map((tab,index)=>{
      return (
          <li key={index} className={tab.isActive ? "is-active" : ""}><a className={tab.isActive ? "tab__active-link" : ""}>{tab.name}</a></li>
      )
    })
    return <div className="tabs">
             <ul>{result}
             </ul>
           </div>
  }
}

export default Tabs
