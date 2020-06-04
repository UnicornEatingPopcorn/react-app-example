import React, { Component } from 'react';
import AddressTile from './AddressTile';
import ListButton from './ListButton';

class AddressTiles extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      addresses: [],
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

  componentDidMount() {
    fetch("http://localhost:3000/addresses")
      .then(response => response.json())
      .then(data => {
          this.setState({
            isLoaded: true,
            addresses: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, addresses, size } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const result = addresses.slice(0,size).map((address) => {
        return <AddressTile key={address.id} address={address}/>
    })
    return (
        <div>
          <ul>{result}</ul>
          <ListButton onClick={this.handleClick}/>
         </div>
      )
    }
  }
}
export default AddressTiles
