import React, {Component} from "react";

class NewAddressForm extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
      postalCode: "",
      address: ""
    }

    this.state = this.initialState
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
}

  handleInputChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  render() {
    const openForm = this.props.openRequest
    const {name, postalCode, address} = this.state;

    return (
      <div>
        { openForm &&
          <form className="NewAddressForm" onSubmit={this.handleSubmit}>
            <div className="NewAddressForm__start">
              <p className="NewAddressForm__title">배송지 추가</p>
              <p className="NewAddressForm__close-button">X</p>
            </div>
            <div className="control NewAddressForm__name-input">
              <input className="input" type="text" name="name" value={name} placeholder="받는 사람" onChange={this.handleInputChange}/>
            </div>
            <div className="control NewAddressForm__postalCode-input">
              <input className="input" type="text" name="postalCode" value={postalCode} placeholder="우편번호" onChange={this.handleInputChange}/>
            </div>
            <div className="control NewAddressForm__address-input">
              <input className="input" type="text" name="address" value={address} placeholder="주소" onChange={this.handleInputChange}/>
            </div>
            <div className="control">
              <label className="checkbox">
                <input type="checkbox"/>
                기본 배송지로 등록
              </label>
            </div>
            <div className="control">
              <button className="button NewAddressForm__button is-danger">등록 완료</button>
            </div>
          </form>
        }
      </div>
      )
  }
}

export default NewAddressForm
