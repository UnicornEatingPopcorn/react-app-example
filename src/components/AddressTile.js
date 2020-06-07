import React, { Component } from "react";
import Menu from './Menu';

class AddressTile extends Component {
  render() {
    const address = this.props.address
    const addresses = this.props.addresses
    const deleteAddress = this.props.removeAddress

    return (
      <div className="AddressTile">
        <p className="AddressTile__postnumber">[{address.postnumber}]</p>
        <p className="AddressTile__address">{address.address}</p>
        <Menu address={address} addresses={addresses} deleteDefaultAddress={deleteAddress}/>
      </div>
    );

  }
}

export default AddressTile
