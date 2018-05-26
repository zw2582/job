import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import './config'
import redutor from './redux'
// import 'antd-mobile/dist/antd-mobile.css'
import Login from './containers/login/login'
import Regist from './containers/regist/regist'
import AuthRoute from './containers/auth/AuthRoute'
import Bossinfo from './containers/bossinfo/bossinfo'
import GeniusInfo from './containers/genius/geniusinfo';
import DashBoad from './components/dashboad/DashBoad';
import Chat from './containers/chat/chat';

import './index.css'

const store = createStore(redutor, applyMiddleware(thunk, logger))

ReactDom.render(<Provider store={store}>
    <BrowserRouter>
        <div>
            <AuthRoute store={store} />
            <Switch>
                {/* <Route path="/" component={AuthRoute} /> */}
                <Route path="/login" component={Login} />
                <Route path="/regist" component={Regist} />
                <Route path="/bossinfo" component={Bossinfo} />
                <Route path="/niuinfo" component={GeniusInfo} />
                <Route path="/chat/:uid" component={Chat} />
                <Route component={DashBoad} />
            </Switch>
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'))