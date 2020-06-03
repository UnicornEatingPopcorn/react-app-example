// @flow
import React, {Component} from 'react';
import './App.scss';
import Tabs from './components/Tabs'
import AddressTile from './components/AddressTile'
//import 'react-bulma-components/dist/react-bulma-components.min.css';
//import { Button } from 'react-bulma-components';

class App extends Component {
  render() {
    const tabs = [
      {name:'프로필', isActive: false},
      {name:'계정', isActive:false},
      {name:'결제수단', isActive:false},
      {name:'배송지', isActive:true},
      {name:'알림', isActive: false}
    ]
    return (
      <div className="column is-paddingless is-mobile">
        <h1 className="App_title">설정</h1>
        <Tabs characterData={tabs}/>
        <p className="App_subtitle">등록된 배송지</p>
        <a className="App_link">+추가</a>
        <AddressTile/>
        <div className="App_button">더보기</div>
        <div className="App_info-container">
          <div className="App_info">
            <p className="App_info-title">배송지를 삭제하면 예약된 후원의 배송지 정보도 삭제되나요?</p>
            <p className="App_info-subtitle">현재 후원하신 프로젝트에 등록된 배송지가 삭제되거나 변경되지 않습니다. 이를 변경하시려면 후원현황에서 변경해주세요. <a>내 후원현황 바로가기</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
