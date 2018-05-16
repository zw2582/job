import React from 'react';
import { Button,InputItem,WhiteSpace,WingBlank } from 'antd-mobile'

import Logo from '../../components/logo/logo'

class Login extends React.Component {

    render() {
        return (
            <div>
                <Logo/>
                <WingBlank>
                    <InputItem>用户名</InputItem>
                    <InputItem>密码</InputItem>
                    <WhiteSpace />
                    <Button type="primary">登陆</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login