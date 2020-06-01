// @flow
import React from 'react';
import './App.scss';
//import 'react-bulma-components/dist/react-bulma-components.min.css';
//import { Button } from 'react-bulma-components';

function App() {
  return (
    <div>
      <h1 className="App-title">설정</h1>
      <button className="button is-primary">My Bulma button</button>
      <div className="tabs">
        <ul>
          <li className="is-active"><a>프로필</a></li>
          <li><a>계정</a></li>
          <li><a>결제수단</a></li>
          <li><a>배송지</a></li>
          <li><a>알림</a></li>
        </ul>
      </div>
    </div>
  )
}

export default App;
