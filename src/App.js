// @flow
import React, {Component} from 'react';
import './App.sass';
import Tabs from './components/Tabs'
import AddressTile from './components/AddressTile'
import AppInfo from './components/AppInfo'

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App_title">설정</h1>
        <Tabs/>
        <div id="mobile-version">
          <div className="App_mobile-container">
            <p className="App_subtitle">등록된 배송지</p>
            <a className="App_link">+추가</a>
          </div>
          <div className="App_mobile-tiles">
            <AddressTile/>
            <div className="App_button">더보기</div>
            <AppInfo/>
          </div>
        </div>
        <div id="tablet-version">
          <div className="App_tablet-container">
            <p className="App_subtitle">등록된 배송지</p>
            <a className="App_link">+추가</a>
          </div>
          <div className="App_tablet-tiles">
            <AddressTile/>
            <div className="App_button">더보기</div>
          </div>
          <AppInfo/>
        </div>
        <div id="desktop-version">
          <div className="columns">
            <div className="column is-paddingless is-9">
              <div className="App_tablet-container">
                <p className="App_subtitle">등록된 배송지</p>
                <a className="App_link">+추가</a>
              </div>
              <div className="App_tablet-tiles">
                <AddressTile/>
                <div className="App_button">더보기</div>
              </div>
            </div>
            <div className="column is-paddingless">
              <AppInfo/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
