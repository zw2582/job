import axios from 'axios'
import { getLoginRedictUrl } from '../utils'

const ERROR = 'ERROR'
const LOGIN = 'LOGIN'

const init = {
    logined:false,
    name:'',
    pwd:'',
    type:'',
    errorMsg:'',
    redirect:''
}

export function user(state=init, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, ...action.reload}
        case ERROR:
            return {...state, errorMsg:action.errorMsg}
        default:
            return state
    }
}

//action:登陆成功
function LoginSucc({name,pwd,type,errorMsg,redirect}) {
    return {
        type: LOGIN,
        reload:{
            name,pwd,type,errorMsg,redirect,logined:true
        }
    }
}

//action：收到错误
function reviceError($msg) {
    return {
        type: ERROR,
        errorMsg: $msg
    }
}

//action:发送注册
export function sendRegist({name,pwd,repeatpwd,type}) {
    if (!name || !pwd || !type) {
        return reviceError('请输入必输参数')
    }
    if (pwd !== repeatpwd) {
        return reviceError('确认密码不正确')
    }
    return dispatch=>{
        axios.post('/user/regist', {name, pwd, type}).then((res)=>{
            if (res.status === 200 && res.data.code === 1) {
                dispatch(LoginSucc({name,pwd,type, 'errorMsg':'注册成功', 'redirect':getLoginRedictUrl(type, '')}))
            } else {
                dispatch(reviceError('注册失败'))
            }
        })
    }
}

//action:发送登陆
export function login({name, pwd}) {
    if (!name || !pwd) {
        return reviceError('请输入用户名和密码')
    }
    return dispatch=>{
        axios.post('/user/login', {name, pwd}).then((res)=>{
            if(res.status===200 && res.data.code === 1) {
                let type = res.data.data.type
                dispatch(LoginSucc({name,pwd,type, 'errorMsg':'登陆成功', 'redirect':getLoginRedictUrl(type, '')}))
            } else {
                dispatch(reviceError('登陆失败'))
            }
        })
    }
}