import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom'
import thunk from 'redux-thunk'

import './config'
import redutor from './redux'
import 'antd-mobile/dist/antd-mobile.css'
import Login from './containers/login/login'
import Regist from './containers/regist/regist'
import AuthRoute from './containers/auth/AuthRoute'

const store = createStore(redutor, applyMiddleware(thunk))

function Boad() {
    return <h1>我是boad</h1>
}

ReactDom.render(<Provider store={store}>
    <BrowserRouter>
        <div>
            <AuthRoute />
                {/* <Route path="/" component={AuthRoute} /> */}
                <Route path="/login" component={Login} />
                <Route path="/regist" component={Regist} />
            <Route path="/boad" component={Boad} />
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'))