import React from 'react';
import { withRouter,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import { getUser,authSucc } from '../../reduxs/user'
import { getLoginRedictUrl } from '../../utils'


@withRouter
class AuthRoute extends React.Component {

    componentDidMount() {
        const publicList = ['/login', '/regist']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname) > -1) {
            return null
        }
        axios.get('/user/userinfo').then((res)=>{
            if (res.status === 200) {
                if(res.data.code === 0) {
                    this.props.history.push('/login')
                } else {
                    let {id,name,avatar,type} = res.data.data
                    this.props.store.dispatch(authSucc({id,name,avatar,type}))
                }
            }
        })
    }

    render() {
        return null
    }
}

export default AuthRoute