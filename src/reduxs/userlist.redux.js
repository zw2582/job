import axios from 'axios'
const REVICE_LIST = 'REVICE_LIST'
const MSG = 'MSG'

const init={
    msg:'',
    data:[]
}

export function userlist(state=init, action) {
    switch(action.type) {
        case REVICE_LIST:
            return {...state, data:action.reload}
            return {...state, data:[...state.data, ...action.reload]}
        case MSG:
            return {...state, msg:action.msg}
        default:
            return state
    }
}

function reciveUserList(data) {
    return {
        type: REVICE_LIST,
        reload: data
    }
}

function msg(msg) {
    return {
        type: MSG,
        msg
    }
}

export function getUserList() {
    return dispatch=>{
        axios.get('/user/listUser').then(res=>{
            if (res.status == 200 && res.data.code == 1) {
                dispatch(reciveUserList(res.data.data))
            } else {
                dispatch(msg('获取用户列表失败'))
            }
        })
    }
}