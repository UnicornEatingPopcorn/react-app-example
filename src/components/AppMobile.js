import React, {Component} from 'react';
import AddressTiles from '../components/AddressTiles'
import AppInfo from '../components/AppInfo'
import NewAddressFormMobile from '../components/NewAddressFormMobile';
import axios from 'axios'

class AppMobile extends Component {
  constructor(props){
    super(props);
    this.openAddresses = this.openAddresses.bind(this)
    this.removeAddress=this.removeAddress.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.openNewAddressForm = this.openNewAddressForm.bind(this)
    this.state = {
      addresses: [],
      error: null,
      isLoaded: false,
      isOpenForm: false,
      size: 5
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

      axios.delete(`http://localhost:3000/addresses/${address.id}`)
        .then(response => {
          console.log(response)
        })
    }
  }

  openAddresses() {
    let size = this.state.size;

    if (size <= this.state.addresses.length -1){ size += 5 };

     this.setState(()=>({
      size: size
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
      <div id="mobile-version">
        <div className="App__mobile-container">
          <p className="App__subtitle">등록된 배송지</p>
          <a className="App__link" onClick={this.openNewAddressForm}>+추가</a>
        </div>
        <div className="App__mobile-tiles">
          <AddressTiles addresses={addresses} error={error} isLoaded={isLoaded} removeAddress={this.removeAddress} size={size}/>
          <div className={size === addresses.length ? "App__button-invisible" : "App__button"} onClick={this.openAddresses}>더보기</div>
        </div>
        <AppInfo/>
        <NewAddressFormMobile handleSubmit={this.handleSubmit} openRequest={isOpenForm}/>
      </div>
    )
  }
}

export default AppMobile
