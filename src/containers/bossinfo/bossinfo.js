import React from 'react';

import { NavBar,WhiteSpace,InputItem,TextareaItem,WingBlank, Button } from 'antd-mobile'

class Bossinfo extends React.Component {

    handleChange=(name, value)=>{
        this.setState({[name]:value})
    }

    handleSave=()=>{
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <NavBar mode="dark">完善boss信息</NavBar>
                <WhiteSpace />
                
                <InputItem
                onChange={(v)=>this.handleChange('company', v)}
                >公司</InputItem>
                <WhiteSpace />
                <InputItem
                onChange={(v)=>this.handleChange('position', v)}
                >职位</InputItem>
                <WhiteSpace />
                <InputItem
                onChange={(v)=>this.handleChange('salary', v)}
                >薪资</InputItem>
                <WhiteSpace />
                <TextareaItem
                title="职位要求"
                rows={3} autoHeight
                onChange={(v)=>this.handleChange('claim', v)}
                ></TextareaItem>
                <WhiteSpace />
                <WingBlank>
                    <Button onClick={this.handleSave} type="primary">完成</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Bossinfo