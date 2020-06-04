import React, { Component } from 'react';
import button from '../button.png'

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
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

  render() {
    return (
      <div>
        <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <img src={button} className="AddressTile__button"></img>
        </div>
        {
          this.state.isHovering &&
          <div className="App__menu">
            <p className="App__menu-selected">기본 배송지 설정</p>
            <p className="App__menu-option">삭제</p>
          </div>
        }
      </div>
    );
  }
}

export default AppMenu
