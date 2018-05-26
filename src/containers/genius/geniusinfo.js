import React from 'react';
import { InputItem,List,WhiteSpace,WingBlank,NavBar,Button,TextareaItem } from 'antd-mobile'
import UserAvatar from '../../components/user-avatar/user-avatar';
import { connect } from 'react-redux'
import { saveGenius } from '../../reduxs/user'
import { Redirect } from 'react-router-dom'

@connect(state=>state.user, {saveGenius})
class GeniusInfo extends React.Component {

    avatarClick=($obj, $index)=>{
        this.setState({
            'avatar':$obj
        })
    }

    handleChange=(name, value)=>{
        this.setState({[name]:value})
    }

    complete=()=>{
        this.props.saveGenius(this.state)
    }

    state={
        avatar:''
    }

    render() {
        return (
            <div>
                <NavBar mode="dark">完善牛人信息</NavBar>
                <WhiteSpace />
                {this.props.msg && <p>{this.props.msg}</p>}
                {this.props.redirect && <Redirect to={this.props.redirect} />}
                <List
                    renderHeader={<span>选择头像:{this.state.avatar}</span>}
                >
                <UserAvatar clickHandler={this.avatarClick} />
                </List>
                
                <WhiteSpace />
                <InputItem
                    onChange={v=>this.handleChange('salary', v)}
                >期望</InputItem>

                <WhiteSpace />
                <TextareaItem
                title="个人总结"
                rows={3} autoHeight
                onChange={(v)=>this.handleChange('summary', v)}
                ></TextareaItem>

                <WhiteSpace />

                <WingBlank>
                <Button type="primary" onClick={this.complete}>完成</Button>
                </WingBlank>
            </div>
        )
    }
}

export default GeniusInfo