//获取登陆成功之后的跳转地址
export function getLoginRedictUrl(type, avatar) {
    if (type == 1) {
        if(!avatar) {
            return '/niuinfo'
        } 
    } else {
        if (!avatar) {
            return '/bossinfo'
        }
    }
    return '/'
}