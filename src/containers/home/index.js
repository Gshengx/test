import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import './index.less';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Link
                        style={{textDecoration:'none',color:'#fff'}}
                        to={{
                            pathname: '/baseInfo',
                            state: {},
                        }}
                    >
                      <div  className="APP-link">了解更多</div>
                    </Link>
                </header>
            </div>
        );
    }
}

export default App;
