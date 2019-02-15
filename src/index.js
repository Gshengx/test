import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactRout from './router/router';
import * as serviceWorker from './serviceWorker';
// babel本身只能转换ES6语法，但ES6新增的MAP、SET、Generator等新功能不会转换，所以需要此垫片库
import 'babel-polyfill';
import 'console-polyfill';
import 'es6-promise';

ReactDOM.render(<ReactRout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
