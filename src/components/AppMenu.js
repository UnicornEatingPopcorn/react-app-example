import React, { Component } from 'react';
import button from '../button.png';
import Modal from "./Modal";

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.setDefaultAddress = this.setDefaultAddress.bind(this);
    this.deleteDefaultAddress = this.deleteDefaultAddress.bind(this);
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

  deleteDefaultAddress() {
    this.setState( ()=> ({
      isDeleteAddress: true,
      isHovering: false,
      isDefaultAddress: false
    }))
  }


  render() {
    const modalOpenRequest = this.state.isDeleteAddress
    const setDefaultAddress = this.state.isDefaultAddress

    return (
      <div>
        <div className="App__container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <img src={button} className="AddressTile__button"></img>
        </div>
        {
          this.state.isHovering &&
          <div className="App__menu">
            <p className="App__menu-selected" onClick={this.setDefaultAddress}>기본 배송지 설정</p>
            <p className="App__menu-delete" onClick={this.deleteDefaultAddress}>삭제</p>
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
        <Modal isOpened={modalOpenRequest}/>
      </div>
    );
  }
}

export default AppMenu
