import React, { Component } from 'react';
import AppMenu from './AppMenu';

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
    const toggle = this.props.isToggleOn;
    const { error, isLoaded, addresses } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>{addresses.slice(0,5).map((address,index) => (
          <div className={toggle ? "AddressTile__first-child_visible" : "AddressTile"} key={address.id}>
            <p className="AddressTile__postnumber">[{address.postnumber}]</p>
              <span className={index === 0 ? "AddressTile__tag" : ""}>
                <p className={index === 0 ? "visible" : "is-hidden"}>기본</p></span>
            <p className="AddressTile__address">{address.address}</p>
            <AppMenu/>
          </div>
        ))}
        </ul>
      );
    }
  }
}
export default AddressTile
