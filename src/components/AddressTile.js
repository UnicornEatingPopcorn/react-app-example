import React, { Component } from "react";
import Menu from './Menu';

class AddressTile extends Component {
  render() {
    const address = this.props.address
    const addresses = this.props.addresses
    const removeAddress = this.props.removeAddress

    return (
      <div className="AddressTile" key={address.id}>
        <p className="AddressTile__postnumber">[{address.postnumber}]</p>
        <p className="AddressTile__address">{address.address}</p>
        <Menu removeAddress={removeAddress} address={address} addresses={addresses}/>
      </div>
    );

  }
}

export default AddressTile
