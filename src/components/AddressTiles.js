import React, { Component } from 'react';
import AddressTile from './AddressTile';
import ListButton from './ListButton';
import NoAddresses from './NoAddresses';

class AddressTiles extends Component {
  constructor(props) {
    super(props);
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

  render() {
    const { error, isLoaded, addresses } = this.props;
    const removeAddress = this.props.removeAddress

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const result = addresses.map((address) => {
        return <AddressTile key={address.id} addresses={addresses} address={address} removeAddress={removeAddress} />
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
