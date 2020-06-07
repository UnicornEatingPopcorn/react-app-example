import React, {Component} from "react";
import AddressTiles from '../components/AddressTiles'
import AppInfo from '../components/AppInfo'
import NewAddressForm from '../components/NewAddressForm';
import axios from 'axios'

class AppDesktop extends Component {
   constructor(props){
    super(props);
    this.openAddresses = this.openAddresses.bind(this)
    this.removeAddress = this.removeAddress.bind(this)
    this.openNewAddressForm = this.openNewAddressForm.bind(this)
    this.state = {
      addresses: [],
      error: null,
      isLoaded: false,
      isOpenForm: false,
      size: 5
    }
  }

  handleSubmit = address => {
    this.setState({
      addresses: [...this.state.addresses, address],
      isOpenForm: false
    })
  }

  openNewAddressForm() {
    this.setState(()=>({
      isOpenForm: true
    }))
  }

  removeAddress(address) {
    const newAddresses = [...this.state.addresses]
    const index = newAddresses.indexOf(address)
    if(index !== -1) {
      newAddresses.splice(index, 1);
      this.setState({addresses: newAddresses})

      axios.delete(`http://localhost:3000/addresses/${address.id}`)
        .then(response => {
          console.log(response)
        })
    }
  }

  openAddresses() {
    let size = this.state.size;
    //let isShowButton = this.state.isShowButton;

    if (size <= this.state.addresses.length - 1){
      size += 5;
    } else {
      return
    };
    this.setState(()=>({
      size: size,
    }));
  }


  componentDidMount() {
    axios.get("http://localhost:3000/addresses")
      .then(res => {
        const response = res.data
          this.setState({
            isLoaded: true,
            addresses: response,
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
    const isOpenForm = this.state.isOpenForm
    const {addresses, error, isLoaded, size } = this.state

    return (
      <div id="desktop-version">
        <div className="columns">
          <div className="column is-paddingless is-9">
            <div className="App__tablet-container">
              <p className="App__subtitle">등록된 배송지</p>
              <a className="App__link" onClick={this.openNewAddressForm}>+추가</a>
            </div>
            <div className="App__tablet-tiles">
              <AddressTiles addresses={addresses} error={error} isLoaded={isLoaded} removeAddress={this.removeAddress} size={size}/>
              <div className="App__button" onClick={this.openAddresses}>더보기</div>
            </div>
          </div>
          <div className="column is-paddingless">
            <AppInfo/>
          </div>
        </div>
        <NewAddressForm handleSubmit={this.handleSubmit} openRequest={isOpenForm}/>
      </div>
    )
  }
}

export default AppDesktop
