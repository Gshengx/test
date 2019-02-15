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

export default class NoPermissions extends React.Component {
    render() {
        return (
            <div className='NoPermissions-demo'>
                <p>sorry！您的账户访问系统权限不足(´･ω･`)</p>
            </div>
        )
    }
}