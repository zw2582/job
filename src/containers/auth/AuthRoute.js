import React from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import { getLoginRedictUrl } from '../../utils'

class AuthRoute extends React.Component {

    componentDidMount() {
        const publicList = ['/login', '/regist']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname) > -1) {
            return null
        }
        axios.get('/user/info').then((res)=>{
            if (res.status === 200) {
                if(res.data.code === 1) {
                    //有登陆信息
                    let user = res.data.data
                    
                    let url = getLoginRedictUrl(user.type, user.headimg)
                    this.props.history.push(url)
                } else {
                    //进入登陆页
                    this.props.history.push('/login')
                }
            }
        }).catch(err=>{
            this.props.history.push('/login')
            console.log(err)
        })
    }
    render() {
        return null
    }
}

AuthRoute = withRouter(AuthRoute)

export default AuthRoute