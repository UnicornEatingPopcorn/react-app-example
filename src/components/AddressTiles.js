import React, { Component } from 'react';
import AddressTile from './AddressTile';
import NoAddresses from './NoAddresses';

class AddressTiles extends Component {
  render() {
    const { error, isLoaded, addresses,size } = this.props;
    const removeAddress = this.props.removeAddress

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (size === 0) {
      return <NoAddresses/>;
    } else {
      const result = addresses.slice(0, size).map((address) => {
        return <AddressTile key={address.id} addresses={addresses} address={address} removeAddress={removeAddress} />
    })
    return (
        <div>
          <ul>{result}</ul>
        </div>
      )
    }
  }
}
export default AddressTiles
