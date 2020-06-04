import React, { Component } from 'react';
import AddressTile from "./AddressTile"

class ListButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isToggleOn: false,
    };
  }

  handleClick() {
    this.setState( state=>({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    const toggleState = this.state.isToggleOn
    return (
      <div>
        <div onClick={this.handleClick}>
          <div className={this.state.isToggleOn ? "App__button-invisible" : "App__button"}>더보기</div>
        </div>
        {
          this.state.isToggleOn &&
          <div>
            <AddressTile isToggleOn={toggleState}/>
            <ListButton/>
          </div>
        }
      </div>
    );
  }
}

export default ListButton
