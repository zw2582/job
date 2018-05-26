import React from 'react';
import UserCard from '../../components/usercard/usercard';
import { connect } from 'react-redux'
import { getUserList } from '../../reduxs/userlist.redux'
import { isNullOrUndefined } from 'util';

@connect(state=>state.userlist, {getUserList})
class UserList extends React.Component {

    componentDidMount() {
        this.props.getUserList()
    }

    clickHandle=(uid)=>{
        this.props.history.push(`/chat/${uid}`)
    }

    render() {
        return (
            <div>
                {this.props.msg && <p>{this.props.msg}</p>}
                <UserCard data={this.props.data} clickHandle={this.clickHandle} />
            </div>
        )
    }
}

export default UserList