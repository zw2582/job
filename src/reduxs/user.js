import axios from 'axios'
const REGIST = 'REGIST'
const ERROR = 'ERROR'

const init = {
    name:'',
    pwd:'',
    type:'',
    errorMsg:''
}

export function user(state=init, action) {
    switch (action.type) {
        case REGIST:
            return {...state, ...action.reload}
        case ERROR:
            return {...state, errorMsg:action.errorMsg}
        default:
            return state
    }
}

function reviceRegist({name,pwd,type,errorMsg}) {
    return {
        type: REGIST,
        reload:{
            name,pwd,type,errorMsg
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
                dispatch(reviceRegist({name,pwd,type, 'errorMsg':'注册成功'}))
            } else {
                dispatch(reviceError('注册失败'))
            }
        })
    }
}