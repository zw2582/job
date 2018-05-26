import { combineReducers } from 'redux'
import { user } from './reduxs/user'
import { userlist } from './reduxs/userlist.redux'

const redutor = combineReducers({user, userlist})

export default redutor