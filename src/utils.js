//获取登陆成功之后的跳转地址
export function getLoginRedictUrl(type, headimg) {
    if (type == 'niu') {
        if(!headimg) {
            return '/niuinfo'
        } 
        return '/boad'
    } else {
        if (!headimg) {
            return '/bossinfo'
        }
        return '/boad'
    }
}