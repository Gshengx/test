import React, { Component } from 'react';
import logo from '../../img/logo.jpg';
import { Link } from "react-router-dom";
import Carousel from '../../components/common/carousel'
import './index.less';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className='App-info'>
                        郭盛镶-个人介绍
                    </p>
                    <Link
                        className="App-link"
                        to={{
                            pathname: '/baseInfo',
                            state: {},
                        }}
                    >
                      <div  className="App-link-text">
                          <span>了</span>
                          <span>解</span>
                          <span>更</span>
                          <span>多</span>
                      </div>
                    </Link>
                </div>
                <div className='App-carousel'>
                    <Carousel/>
                </div>
            </div>
        );
    }
}

export default App;
