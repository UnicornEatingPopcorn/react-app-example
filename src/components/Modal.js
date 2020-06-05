import React, {Component} from "react";

class Modal extends Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        modalOpen: true
      };
  }

  handleClick() {
    this.setState( ()=>({
      modalOpen: false
    }));
  }

  render() {
    const modalOpen = this.props.isOpened

    return (
      <div className={modalOpen && this.state.modalOpen ? "modal is-active" : "modal is-hidden"}>
        <div className="modal-background" onClick={this.handleClick}></div>
        <div className="modal-content Modal__container">
          <span className="Modal__horizontal-divider"></span>
          <p className="Modal__question">정말 삭제하시겠습니까?</p>
          <span className="Modal__vertical-divider"></span>
          <p className="Modal__accept-button">확인</p>
          <p className="Modal__decline-button">취소</p>
        </div>
    </div>
    )
  }
}

export default Modal
