import React, {Component} from 'react';
import AddressTiles from '../components/AddressTiles'
import AppInfo from '../components/AppInfo'
import NewAddressFormMobile from '../components/NewAddressFormMobile';

class AppMobile extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.openNewAddressForm = this.openNewAddressForm.bind(this)
    this.state = {
      addresses: [],
      isOpenForm: false
    }
  }

  handleSubmit(address) {
    console.log("pupun")
    this.setState({ addresses: [...this.state.addresses, address] })
  }

  openNewAddressForm() {
    this.setState( (state) => ({
      isOpenForm: !state.isOpenForm
    }))
  }

  render() {
    const isOpenForm = this.state.isOpenForm

    return (
      <div id="mobile-version">
        <div className="App__mobile-container">
          <p className="App__subtitle">등록된 배송지</p>
          <a className="App__link" onClick={this.openNewAddressForm}>+추가</a>
        </div>
        <div className="App__mobile-tiles">
          <AddressTiles/>
          <AppInfo/>
        </div>
        <NewAddressFormMobile handleSubmit={this.handleSubmit} openRequest={isOpenForm}/>
      </div>
    )
  }
}

export default AppMobile
