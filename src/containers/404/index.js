/**
 *
 * title: 404/index.js
 *
 * description: 404错误页面
 *
 * author: liyang
 *
 * date: 2017/05/15
 */

import React from 'react';
import './index.less';

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <div className='NotFoundPage-demo'>
                <p>
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </p>
                <p>该页面暂未开发(´･ω･`)</p>
            </div>
        )
    }
}