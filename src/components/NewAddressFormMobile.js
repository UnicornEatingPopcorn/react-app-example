import React, {Component} from "react";
import button from '../close-button.png'

class NewAddressFormMobile extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this)
    this.initialState = {
      name: "",
      postalNumber: "",
      address: "",
      id: null,
      isCloseModal: true
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

  closeModal = () => {
    this.setState((state)=>({
      isCloseModal: !state.isCloseModal
    }))
  }


render() {
  const openForm = this.props.openRequest
  const {name, postalCode, address} = this.state;


  return (
      <div className={openForm && this.state.isCloseModal ? "modal is-active" : "modal is-hidden"}>
        <div className="modal-background">
            <form className="NewAddressFormMobile" onSubmit={this.handleSubmit}>
              <div className="NewAddressFormMobile__start">
                <p className="NewAddressFormMobile__title">배송지 추가</p>
                <img src={button} className="NewAddressFormMobile__close-button" onClick={this.closeModal}></img>
              </div>
              <div className="control NewAddressFormMobile__name-input">
                <input className="input" type="text" name="name" value={name} placeholder="받는 사람" onChange={this.handleInputChange}/>
              </div>
              <div className="control NewAddressFormMobile__postalCode-input">
                <input className="input" type="text" name="postalCode" value={postalCode} placeholder="우편번호" onChange={this.handleInputChange}/>
              </div>
              <div className="control NewAddressFormMobile__address-input">
                <input className="input" type="text" name="address" value={address} placeholder="주소" onChange={this.handleInputChange}/>
              </div>
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox"/>
                  기본 배송지로 등록
                </label>
              </div>
              <div className="control">
                <button className="button NewAddressFormMobile__button is-danger">등록 완료</button>
              </div>
            </form>
        </div>
      </div>
      )
  }
}

export default NewAddressFormMobile
