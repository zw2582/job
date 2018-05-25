import React from 'react';
import { WingBlank,WhiteSpace,Button, InputItem,Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

import { regist } from '../../reduxs/user'

@connect((state)=>state.user, {regist})
class Regist extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handlerRegist = this.handlerRegist.bind(this)
    }

    state={
        name:'',
        password:'',
        repeatpwd:'',
        type:1  //1.genius,2.boss
    }

    handleChange(name, val){
        this.setState({
            [name]:val
        })
    }

    handlerRegist() {
        this.props.regist(this.state)
    }

    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.msg && <p>{this.props.msg}</p>}
                {this.props.redirect && <Redirect to={this.props.redirect}></Redirect>}
                <InputItem onChange={(v)=>this.handleChange('name', v)}>用户名</InputItem>
                <InputItem type="password" onChange={(v)=>this.handleChange('password', v)}>密码</InputItem>
                <InputItem type="password" onChange={(v)=>this.handleChange('repeatpwd', v)}>确认密码</InputItem>
                <RadioItem checked={this.state.type===1}
                    onClick={()=>this.handleChange('type', 1)}>牛人</RadioItem>
                <RadioItem checked={this.state.type===2}
                    onClick={()=>this.handleChange('type', 2)}>boss</RadioItem>
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary" onClick={this.handlerRegist}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Regist