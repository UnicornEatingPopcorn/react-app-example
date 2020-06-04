import React, { Component } from "react";
import AppMenu from './AppMenu';
import Modal from "./Modal";

class AddressTile extends Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleTagClick = this.handleTagClick.bind(this);
      this.state = {
        isClicked: false,
        //isToggleOn: false,
        modalOpen: false
      };
  }

  handleClick() {
    this.setState( state=>({
      isClicked: !state.isClicked,
      //isToggleOn: !state.isToggleOn
    }));
  }

  handleTagClick() {
    this.setState( state=> ({
      modalOpen: !state.modalOpen
    }))
  }

  render() {
    const address = this.props.address
    //const toggle = this.state.isToggleOn
    const setDefaultAddress = this.state.isClicked
    const modalOpenRequest = this.state.modalOpen

    return (
      <div>
        <div className="AddressTile" onClick={this.handleClick}>
          <p className="AddressTile__postnumber">[{address.postnumber}]</p>
          <p className="AddressTile__address">{address.address}</p>
          <AppMenu/>
          <span className={setDefaultAddress ? "AddressTile__tag" : ""} onClick={this.handleTagClick}>
            <p className={setDefaultAddress ? "visible" : "is-hidden"}>기본
            </p>
          </span>
        </div>
        <div className={setDefaultAddress ? "AddressTile__default" : "is-hidden"}>
          <span className="AddressTile__default-address">
            <p>기본 배송지가 변경되었습니다.
            </p>
          </span>
        </div>
        <Modal isOpened={modalOpenRequest}/>
      </div>
    );

  }
}

export default AddressTile
