import React from 'react';
import {Router,Route, Switch,} from "react-router-dom";
import history from "./history";
import RootContainer from "../containers/root/index";

export default class ReactRoute extends React.Component{
    render(){
        return(
            <Router history={history}>
                <div style={{height:'100%'}}>
                    <Switch>
                        <Route path="/" component={RootContainer} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
