// @flow
import React, {Component} from 'react';
import './App.sass';
import './variables.sass';
import Tabs from './components/Tabs'
import AppMobile from './components/AppMobile'
import AppTablet from './components/AppTablet';
import AppDesktop from './components/AppDesktop';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App__title">설정</h1>
        <Tabs/>
        <AppMobile/>
        <AppTablet/>
        <AppDesktop/>
      </div>
    )
  }
}

export default App;
