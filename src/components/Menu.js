import React, { Component } from 'react';
import button from '../button.png';
import Modal from "./Modal";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.setDefaultAddress = this.setDefaultAddress.bind(this);
    this.showModal = this.showModal.bind(this)
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
      modalOpen: false,
      isDefaultAddress: false,
      isDeleteAddress: false
    };
  }

  handleMouseHover() {
    this.setState((state)=> ({
      isHovering: !state.isHovering
    }));
  }

  setDefaultAddress() {
    this.setState( ()=> ({
      isDefaultAddress: true,
      isHovering: false
    }))
  }

  showModal() {
    this.setState( ()=> ({
      isDeleteAddress: true,
      isHovering: false,
      isDefaultAddress: false
    }))
  }


  render() {
    const modalOpenRequest = this.state.isDeleteAddress
    const setDefaultAddress = this.state.isDefaultAddress
    const deleteAddress = this.props.deleteDefaultAddress
    const address = this.props.address

    return (
      <div>
        <div className="Menu__container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <img src={button} className="AddressTile__button"></img>
        </div>
        {
          this.state.isHovering &&
          <div className="Menu__section">
            <p className="Menu__section-selected" onClick={this.setDefaultAddress}>기본 배송지 설정</p>
            <p className="Menu__section-delete" id={address.id} onClick={this.showModal}>삭제</p>
          </div>
        }
        <span className={setDefaultAddress ? "AddressTile__tag" : ""}>
          <p className={setDefaultAddress ? "visible" : "is-hidden"}>기본</p>
        </span>
        <div className={setDefaultAddress ? "AddressTile__default" : "is-hidden"}>
          <span className="AddressTile__default-address">
            <p>기본 배송지가 변경되었습니다.</p>
          </span>
        </div>
        <Modal address={address} deleteAddress={deleteAddress} isOpened={modalOpenRequest}/>
      </div>
    );
  }
}

export default Menu
