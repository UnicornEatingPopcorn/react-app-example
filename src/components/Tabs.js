import React, { Component } from 'react'

class Tabs extends Component {
  render() {
    return (
      <div className="tabs">
        <ul>
          <li className="is-active"><a>프로필</a></li>
          <li><a>계정</a></li>
          <li><a>결제수단</a></li>
          <li><a>배송지</a></li>
          <li><a>알림</a></li>
        </ul>
      </div>
    )
  }
}

export default Tabs
