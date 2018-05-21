import React from 'react';
import { Button,InputItem,WhiteSpace,WingBlank,Icon } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect,Link } from 'react-router-dom'

import Logo from '../../components/logo/logo'
import {login} from '../../reduxs/user'
import Triangle from '../../iconfont/comments.svg';

@connect(state=>state.user, {login})
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
            <Icon type="check" size="md" color="red" />
             <Icon type="comments" size="md" color="red" />
             <Icon color="red" type={Triangle} />
             <Triangle color="red" />
                {/* <Logo/> */}
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

export default Login