import React, {Component} from 'react';
import AddressTiles from '../components/AddressTiles'
import AppInfo from '../components/AppInfo'
import NewAddressFormMobile from '../components/NewAddressFormMobile';
import axios from 'axios'

class AppMobile extends Component {
  constructor(props){
    super(props);
    this.removeAddress=this.removeAddress.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.openNewAddressForm = this.openNewAddressForm.bind(this)
    this.state = {
      addresses: [],
      error: null,
      isLoaded: false,
      isOpenForm: false
    }
  }

  handleSubmit(address) {
    this.setState({
      addresses: [...this.state.addresses, address],
      isOpenForm: false
    })
  }

  openNewAddressForm() {
    this.setState( (state) => ({
      isOpenForm: !state.isOpenForm
    }))
  }

  removeAddress(address) {
    const newAddresses = [...this.state.addresses]
    const index = newAddresses.indexOf(address)
    if(index !== -1) {
      newAddresses.splice(index, 1);
      this.setState({addresses: newAddresses})
      }
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
    const {addresses, error, isLoaded } = this.state

    return (
      <div id="mobile-version">
        <div className="App__mobile-container">
          <p className="App__subtitle">등록된 배송지</p>
          <a className="App__link" onClick={this.openNewAddressForm}>+추가</a>
        </div>
        <div className="App__mobile-tiles">
          <AddressTiles addresses={addresses} error={error} isLoaded={isLoaded} removeAddress={this.removeAddress}/>
          <AppInfo/>
        </div>
        <NewAddressFormMobile handleSubmit={this.handleSubmit} openRequest={isOpenForm}/>
      </div>
    )
  }
}

export default AppMobile
