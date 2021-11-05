import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Table from './components/table';
//import Goal from './components/goal';
//import Goal from './components/cricket'
import reportWebVitals from './reportWebVitals';
//import Run from './components/cricket';
//import Clock from './components/clock';
//import Football from './components/football';
//import Samp from './components/mytable';
import StateData from './components/apptablestate';


//import App from './App';
/*ReactDOM.render(
  <React.StrictMode>
    <Run isRun="0" />
  </React.StrictMode>,
  document.getElementById('root')
);*/


ReactDOM.render(
  <React.StrictMode>
    <StateData />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
