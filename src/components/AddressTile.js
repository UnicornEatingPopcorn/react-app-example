import React, { Component } from 'react';
import button from '../button.png'

class AddressTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      addresses: [],
    };
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
    const { error, isLoaded, addresses } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>{addresses.map((address,index) => (
          <div className="AddressTile" key={address.id}>
            <p className="AddressTile_zipcode">[{address.postnumber}]</p>
            <span className={address.index = 1 ? "AddressTile_tag" : ""}>기본</span>
            <p className="AddressTile_address">{address.address}</p>
            <img src={button} className="AddressTile_button"></img>
          </div>
        ))}
        </ul>
      );
    }
  }
}
export default AddressTile
