import React, {Component} from "react";
import AddressTiles from '../components/AddressTiles'
import AppInfo from '../components/AppInfo'
import NewAddressForm from '../components/NewAddressForm';

class AppTablet extends Component {
  constructor(props){
    super(props);
    this.openNewAddressForm = this.openNewAddressForm.bind(this)
    this.state = {
      addresses: [],
      isOpenForm: false
    }
  }

  handleSubmit = address => {
    this.setState({ addresses: [...this.state.addresses, address] })
  }

  openNewAddressForm() {
    this.setState(()=>({
      isOpenForm: true
    }))
  }

  render() {
    const isOpenForm = this.state.isOpenForm
    return (
     <div id="tablet-version">
        <div className="App__tablet-container">
          <p className="App__subtitle">등록된 배송지</p>
          <a className="App__link" onClick={this.openNewAddressForm}>+추가</a>
        </div>
        <div className="App__tablet-tiles">
          <AddressTiles/>
        </div>
        <AppInfo/>
        <NewAddressForm handleSubmit={this.handleSubmit} openRequest={isOpenForm}/>
     </div>
    )
  }
}

export default AppTablet
