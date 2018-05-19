import React from 'react';
import { Button,InputItem,WhiteSpace,WingBlank } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect,Link } from 'react-router-dom'

import Logo from '../../components/logo/logo'
import {login} from '../../reduxs/user'

class Login extends React.Component {

    state = {
        name:'',
        pwd:''
    }

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange(name, value) {
        this.setState({
            [name]:value
        })
    }

    handleLogin() {
        this.props.login(this.state)
    }

    render() {
        return (
            <div>
                <Logo/>
                {this.props.errorMsg && <p>{this.props.errorMsg}</p>}
                {this.props.redirect && <Redirect to={this.props.redirect}></Redirect>}
                <WingBlank>
                    <InputItem onChange={(v)=>this.handleChange('name', v)}>用户名</InputItem>
                    <InputItem type="password" onChange={(v)=>this.handleChange('pwd', v)}>密码</InputItem>
                    <WhiteSpace />
                    <Button onClick={this.handleLogin} type="primary">登陆</Button>
                    <WhiteSpace/>
                    <Button onClick={()=>{this.props.history.push('/regist')}} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

Login = connect(state=>state.user, {login})(Login)

export default Login