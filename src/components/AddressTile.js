import React, { Component } from 'react';
import button from '../button.png'

class AddressTile extends Component {
  render() {
    return (
      <div className="AddressTile">
        <p className="AddressTile_zipcode">[123456]</p>
        <span className="AddressTile_tag">기본</span>
        <p className="AddressTile_address">서울시 강남구 강남대로 345, 12층 1201호</p>
        <img src={button} className="AddressTile_button"></img>
      </div>
    )
  }
}

export default AddressTile
