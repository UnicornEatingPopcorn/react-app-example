import React, { Component } from "react";
import AppMenu from './AppMenu';

class AddressTile extends Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        isClicked: false,
        //isToggleOn: false,
      };
  }

  handleClick() {
    this.setState( ()=>({
      isClicked: true,
      //isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const address = this.props.address
    //const toggle = this.state.isToggleOn
    const setDefaultAddress = this.state.isClicked

    return (
      <div>
        <div className="AddressTile" onClick={this.handleClick}>
          <p className="AddressTile__postnumber">[{address.postnumber}]</p>
          <p className="AddressTile__address">{address.address}</p>
          <AppMenu/>
          <span className={setDefaultAddress ? "AddressTile__tag" : ""}>
            <p className={setDefaultAddress ? "visible" : "is-hidden"}>기본
            </p>
          </span>
        </div>
        <div className={setDefaultAddress ? "AddressTile__default" : "is-hidden"}>
          <span className="AddressTile__default-address">
            <p>기본 배송지가 변경되었습니다.
            </p>
          </span>
        </div>
      </div>
    );

  }
}

export default AddressTile
