import React from 'react';
import { NavBar,TabBar } from 'antd-mobile'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import Footer from '../footer/footer';
import UserList from '../../containers/userlist/userlist';
import ChatList from '../../containers/chat/chatlist';
import Me from '../../containers/me/me';

require('./img/boss.svg')
require('./img/genius.svg')
require('./img/chat.svg')
require('./img/me.svg')

@connect(state=>state.user)
class DashBoad extends React.Component {

    render() {
        const navList = [
            {
                title:this.props.type==1?"boss":"genius",
                icon:this.props.type==1?"boss":"genius",
                path:"/userlist",
                component:UserList
            },{
                title:"chatList",
                icon:"chat",
                path:"/chatlist",
                component:ChatList
            },{
                title:"me",
                icon:"me",
                path:"/me",
                component:Me
            }
        ]
        const current = navList.find(v=>v.path==this.props.location.pathname)
        return (
            <div>
                <NavBar mode="dark">{current && current.title}</NavBar>

                <Switch>
                {navList.map(v=>(
                    <Route key={v.path} path={v.path} component={v.component} />
                ))}
                <Redirect to="/userlist" />
                </Switch>

                <Footer data={navList} />
            </div>
        )
    }
}

export default DashBoad