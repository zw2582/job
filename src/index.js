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
import Genius from './containers/genius/Genius';

const store = createStore(redutor, applyMiddleware(thunk, logger))

function Boad() {
    return <h1>我是boad</h1>
}

ReactDom.render(<Provider store={store}>
    <BrowserRouter>
        <div>
            <AuthRoute />
            <Switch>
                {/* <Route path="/" component={AuthRoute} /> */}
                <Route path="/login" component={Login} />
                <Route path="/regist" component={Regist} />
                <Route path="/boad" component={Boad} />
                <Route path="/bossinfo" component={Bossinfo} />
                <Route path="/niuinfo" component={Genius} />
            </Switch>
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'))