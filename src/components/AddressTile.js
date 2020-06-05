import React, { Component } from "react";
import Menu from './Menu';

class AddressTile extends Component {
  render() {
    const address = this.props.address

    return (
      <div className="AddressTile">
        <p className="AddressTile__postnumber">[{address.postnumber}]</p>
        <p className="AddressTile__address">{address.address}</p>
        <Menu/>
      </div>
    );

  }
}

export default AddressTile
