import React from 'react';
import { withRouter,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { getUser } from '../../reduxs/user'


@withRouter
@connect(state=>state.user, {getUser})
class AuthRoute extends React.Component {

    componentDidMount() {
        const publicList = ['/login', '/regist']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname) > -1) {
            return null
        }
        this.props.getUser()
    }
    render() {
        if (this.props.redirect && this.props.redirect != this.props.location.pathname) {
            return <Redirect to={this.props.redirect} />
        } else {
            return null
        }
    }
}

export default AuthRoute