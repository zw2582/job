//获取登陆成功之后的跳转地址
export function getLoginRedictUrl(type, headimg) {
    if (type == 'niu') {
        if(!headimg) {
            return '/niuinfo/head'
        } 
        return '/niuinfo'
    } else {
        if (!headimg) {
            return '/bossinfo/head'
        }
        return '/bossinfo'
    }
}