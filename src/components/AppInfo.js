import React, { Component } from "react"

class AppInfo extends Component {
  render() {
    return (
       <div className="App__info-container">
         <div className="App__info">
           <p className="App__info-title">배송지를 삭제하면 예약된 후원의 배송지 정보도 삭제되나요?</p>
           <p className="App__info-subtitle">현재 후원하신 프로젝트에 등록된 배송지가 삭제되거나 변경되지 않습니다. 이를 변경하시려면 후원현황에서 변경해주세요.<a>내 후원현황 바로가기</a></p>
         </div>
       </div>
    )
  }
}

export default AppInfo;
