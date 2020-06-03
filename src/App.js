// @flow
import React, {Component} from 'react';
import './App.sass';
import Tabs from './components/Tabs'
import AddressTile from './components/AddressTile'
import AppInfo from './components/AppInfo'
//import 'react-bulma-components/dist/react-bulma-components.min.css';
//import { Button } from 'react-bulma-components';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App_title">설정</h1>
        <Tabs/>
        <p className="App_subtitle">등록된 배송지</p>
        <a className="App_link">+추가</a>
        <div id="mobile-version">
          <AddressTile/>
          <div className="App_button">더보기</div>
          <AppInfo/>
        </div>
        <div id="tablet-version">
          <div className="App_tablet-container">
            <AddressTile/>
            <div className="App_button">더보기</div>
          </div>
          <AppInfo/>
        </div>
      </div>
    )
  }
}

export default App;
