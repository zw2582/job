import React from 'react';
import { WingBlank,WhiteSpace,Button, InputItem,Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

import { sendRegist } from '../../reduxs/user'

@connect((state)=>state.user, {sendRegist})
class Regist extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handlerRegist = this.handlerRegist.bind(this)
    }

    state={
        'name':'',
        pwd:'',
        repeatpwd:'',
        type:'niu'
    }

    handleChange(name, val){
        this.setState({
            [name]:val
        })
    }

    handlerRegist() {
        this.props.sendRegist(this.state)
    }

    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.errorMsg && <p>{this.props.errorMsg}</p>}
                {this.props.redirect && <Redirect to={this.props.redirect}></Redirect>}
                <InputItem onChange={(v)=>this.handleChange('name', v)}>用户名</InputItem>
                <InputItem type="password" onChange={(v)=>this.handleChange('pwd', v)}>密码</InputItem>
                <InputItem type="password" onChange={(v)=>this.handleChange('repeatpwd', v)}>确认密码</InputItem>
                <RadioItem checked={this.state.type==='niu'}
                    onClick={()=>this.handleChange('type', 'niu')}>牛人</RadioItem>
                <RadioItem checked={this.state.type==='boss'}
                    onClick={()=>this.handleChange('type', 'boss')}>boss</RadioItem>
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary" onClick={this.handlerRegist}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Regist