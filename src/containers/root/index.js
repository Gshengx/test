/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * @author
 * @date 2018/7/26
 */

import React from "react";
import { Route, Switch} from "react-router-dom";
import NotFoundPage from "../404/index";
import BaseInfo from '../baseInfo/index';
import Home from '../home/index';
export default class RootContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() { }

    render() {
        return (
            <div style={{height:'100%'}}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/baseInfo" component={BaseInfo} />
                    <Route path="/*" component={NotFoundPage}/>
                </Switch>
            </div>
        );
    }
}