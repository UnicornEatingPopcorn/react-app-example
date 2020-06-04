import React, { Component } from 'react';
import button from '../button.png';
import Modal from "./Modal";

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
      modalOpen: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  handleClick() {
    this.setState( state=> ({
      modalOpen: !state.modalOpen
    }))
  }

  render() {
    const modalOpenRequest = this.state.modalOpen

    return (
      <div>
        <div className="App__container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <img src={button} className="AddressTile__button"></img>
        </div>
        {
          this.state.isHovering &&
          <div className="App__menu">
            <p className="App__menu-selected">기본 배송지 설정</p>
            <p className="App__menu-delete" onClick={this.handleClick}>삭제</p>
          </div>
        }
        <Modal isOpened={modalOpenRequest}/>
      </div>
    );
  }
}

export default AppMenu
