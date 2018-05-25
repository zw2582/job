import React from 'react';

import { NavBar,WhiteSpace,InputItem,TextareaItem,WingBlank, Button,List } from 'antd-mobile'
import UserAvatar from '../../components/user-avatar/user-avatar';
import { connect } from 'react-redux'
import { saveBoss } from '../../reduxs/user'
import { Redirect } from 'react-router-dom'

@connect(state=>state.user, {saveBoss})
class Bossinfo extends React.Component {

    handleChange=(name, value)=>{
        this.setState({[name]:value})
    }

    handleSave=()=>{
        this.props.saveBoss(this.state)
    }

    avatarClick=(obj,index)=>{
        this.setState({
            avatar:obj
        })
    }

    state={
        avatar:''
    }

    render() {
        return (
            <div>
                <NavBar mode="dark">完善boss信息</NavBar>

                {this.props.msg && <p>{this.props.msg}</p>}
                {(this.props.redirect && this.props.location.pathname != this.props.redirect) && <Redirect to={this.props.redirect} />}

                <List
                    renderHeader={<span>请选择头像:{this.state.avatar}</span>}
                >
                <UserAvatar clickHandler={this.avatarClick} />
                </List>
                
                <WhiteSpace />
                <InputItem
                onChange={(v)=>this.handleChange('company', v)}
                >公司</InputItem>
                <WhiteSpace />
                <InputItem
                onChange={(v)=>this.handleChange('position', v)}
                >职位</InputItem>
                <WhiteSpace />
                <InputItem
                onChange={(v)=>this.handleChange('salary', v)}
                >薪资</InputItem>
                <WhiteSpace />
                <TextareaItem
                title="职位要求"
                rows={3} autoHeight
                onChange={(v)=>this.handleChange('claim', v)}
                ></TextareaItem>
                <WhiteSpace />
                <WingBlank>
                    <Button onClick={this.handleSave} type="primary">完成</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Bossinfo