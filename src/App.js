// @flow
import React from 'react';
import './App.scss';
import Tabs from './components/Tabs'
import AddressTile from './components/AddressTile'
//import 'react-bulma-components/dist/react-bulma-components.min.css';
//import { Button } from 'react-bulma-components';

function App() {
  return (
    <div>
      <h1 className="App-title">설정</h1>
      <Tabs/>
      <div className="columns">
        <div className="column">등록된 배송지</div>
        <div className="column">
          <a>+추가</a></div>
      </div>
      <AddressTile/>
    </div>
  )
}

export default App;
