import React, { Component } from 'react';
import AddressTile from './AddressTile';
import ListButton from './ListButton';
import NoAddresses from './NoAddresses';

class AddressTiles extends Component {
  constructor(props) {
    super(props);
    this.removeAddress=this.removeAddress.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      size: 5
    };
  }

  handleClick() {
    console.log(this.state.addresses)
    this.setState( state=>({
      size: state.size + 5,
      addresses: state.addresses.slice(state.size, state.size + 5)
    }));
  }

  removeAddress(address) {
    const newAddresses = [...this.state.addresses]
    const index = newAddresses.indexOf(address)
    if(index !== -1) {
      newAddresses.splice(index, 1);
      this.setState({addresses: newAddresses})
    }
}

  render() {
    const { error, isLoaded, addresses } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const result = addresses.slice(0, 5).map((address) => {
        return <AddressTile key={address.id} addresses={addresses} removeAddress={this.removeAddress} address={address}/>
    })
    return (
        <div>
          <ul>{result}</ul>
          <NoAddresses/>
          <ListButton onClick={this.handleClick}/>
         </div>
      )
    }
  }
}
export default AddressTiles
