// @flow
import React, {Component} from 'react';
import './App.sass';
import './variables.sass';
import Tabs from './components/Tabs'
import AddressTiles from './components/AddressTiles'
import AppInfo from './components/AppInfo'

class App extends Component {
   render() {
    return (
      <div>
        <h1 className="App__title">설정</h1>
        <Tabs/>
        <div id="mobile-version">
          <div className="App__mobile-container">
            <p className="App__subtitle">등록된 배송지</p>
            <a className="App__link">+추가</a>
          </div>
          <div className="App__mobile-tiles">
            <AddressTiles/>
            <AppInfo/>
          </div>
        </div>
        <div id="tablet-version">
          <div className="App__tablet-container">
            <p className="App__subtitle">등록된 배송지</p>
            <a className="App__link">+추가</a>
          </div>
          <div className="App__tablet-tiles">
            <AddressTiles/>
          </div>
          <AppInfo/>
        </div>
        <div id="desktop-version">
          <div className="columns">
            <div className="column is-paddingless is-9">
              <div className="App__tablet-container">
                <p className="App__subtitle">등록된 배송지</p>
                <a className="App__link">+추가</a>
              </div>
              <div className="App__tablet-tiles">
                <AddressTiles/>
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
