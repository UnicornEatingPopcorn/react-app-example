import React, {Component} from "react";
import mark from '../mark.png'

class NoAddresses extends Component {
  render() {
    return (
      <div className="NoAddresses">
        <div className="NoAddresses__container">
          <img src={mark} className="NoAddresses__mark"></img>
        <p className="NoAddresses__text">등록된 배송지가 없습니다.</p>
        </div>
      </div>
    )
  }
}

export default NoAddresses
