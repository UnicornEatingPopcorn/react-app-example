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
      <div>
        <h1 className="App-title">설정</h1>
        <Tabs characterData={tabs}/>
        <p className="App-subtitle">등록된 배송지</p>
        <a className="App-link">+추가</a>
        <AddressTile/>
      </div>
    )
  }
}

export default App;
