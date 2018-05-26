import React from 'react';
import { WhiteSpace,List,Button,Modal } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import browserCookie from 'browser-cookies'

import { logOut } from '../../reduxs/user'

@connect(state=>state.user, {logOut})
class Me extends React.Component {

    handleLogout=()=>{
        Modal.alert('注销', '确认退出登录吗?', [
            {text:'取消', onPress:()=>console.log('cancel')},
            {text:'确认', onPress:()=>{
                browserCookie.erase('job_id')
                this.props.logOut()
            }}
        ])
    }

    render() {
        return (
            <div>
                {(this.props.redirect == '/login') && <Redirect to={this.props.redirect} />}
                <WhiteSpace/>
                <List>
                    <List.Item onClick={this.handleLogout}>退出</List.Item>
                </List>
            </div>
        )
    }
}

export default Me