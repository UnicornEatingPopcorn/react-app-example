import React, {Component} from "react";

class Modal extends Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.acceptDeletion = this.acceptDeletion.bind(this);
      this.state = {
        modalOpen: true,
        isDelete: false
      };
  }

  handleClick() {
    this.setState( ()=>({
      modalOpen: false
    }));
  }

  acceptDeletion() {
    this.setState( ()=> ({
      modalOpen: false,
      isDelete: true
    }))
  }

  render() {
    const modalOpen = this.props.isOpened
    const acceptDeletion = this.props.deleteAddress
    const addressForDelete = this.props.address

    return (
      <div className={modalOpen && this.state.modalOpen ? "modal is-active" : "modal is-hidden"}>
        <div className="modal-background" onClick={this.handleClick}></div>
        <div className="modal-content Modal__container">
          <span className="Modal__horizontal-divider"></span>
          <p className="Modal__question">정말 삭제하시겠습니까?</p>
          <span className="Modal__vertical-divider"></span>
            <p className="Modal__accept-button" onClick={()=>acceptDeletion(addressForDelete)}>확인</p>
          <p className="Modal__decline-button">취소</p>
        </div>
    </div>
    )
  }
}

export default Modal
