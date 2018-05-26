import axios from 'axios'
import { getLoginRedictUrl } from '../utils'

const ERROR = 'ERROR'
const AUTH = 'AUTH'
const LOGOUT = 'LOGOUT'

const init = {
    name:'',
    type:'',
    avatar:'',
    msg:'',
    redirect:''
}

export function user(state=init, action) {
    switch (action.type) {
        case AUTH:
            return {...state, ...action.reload}
        case ERROR:
            return {...state, msg:action.msg}
        case LOGOUT:
            return {...init, redirect:'/login'}
        default:
            return state
    }
}

//action:登陆成功
export function authSucc(data, redirect) {
    return {
        type: AUTH,
        reload:{
            ...data,redirect
        }
    }
}

//action：收到错误
function error(msg) {
    return {
        type: ERROR,
        msg
    }
}

//action:发送注册
export function regist({name,password,repeatpwd,type}) {
    if (!name || !password || !type) {
        return error('请输入必输参数')
    }
    if (password !== repeatpwd) {
        return error('确认密码不正确')
    }
    return dispatch=>{
        axios.post('/user/regist', {name, password, type}).then((res)=>{
            if (res.status === 200 && res.data.code === 1) {
                let data = res.data.data
                data.msg = res.data.msg
                dispatch(authSucc(data, getLoginRedictUrl(data.type, data.avatar)))
            } else {
                dispatch(error('注册失败'))
            }
        })
    }
}

//action:发送登陆
export function login({name, password}) {
    if (!name || !password) {
        return error('请输入用户名和密码')
    }
    return dispatch=>{
        axios.post('/user/login', {name, password}).then((res)=>{
            if(res.status===200 && res.data.code === 1) {
                let data = res.data.data
                data.msg = res.data.msg
                dispatch(authSucc(data, getLoginRedictUrl(data.type, data.avatar)))
            } else {
                dispatch(error('登陆失败'))
            }
        })
    }
}

export function logOut() {
    return {
        type: LOGOUT
    }
}

export function saveBoss({avatar,position,claim}) {
    return dispatch=>{
        axios.post('/user/saveBoss', {avatar, position, claim}).then(res=>{
            if (res.status === 200 && res.data.code === 1) {
                let data = res.data.data
                dispatch(authSucc({avatar,position,claim}, getLoginRedictUrl(2, avatar)))
            } else {
                dispatch(error('信息保存失败'))
            }
        })
    }
}

export function saveGenius({avatar, salary, summary}) {
    return dispatch=>{
        axios.post('/user/saveGenius', {avatar, salary, summary}).then(res=>{
            if (res.status === 200 && res.data.code === 1) {
                let data = res.data.data
                dispatch(authSucc({avatar, salary, summary}, getLoginRedictUrl(1, avatar)))
            } else {
                dispatch(error('信息保存失败'))
            }
        })
    }
}

export function getUser() {
    return dispatch=>{
        axios.get('/user/userinfo').then(res=>{
            if(res.status == 200) {
                if (res.data.code == 1) {
                    //logined
                    let {id,name,avatar,type} = res.data.data
                    dispatch(authSucc({id,avatar, name, type}))
                } 
            } else {
                dispatch(error('服务器错误'))
            }
        })
    }
}