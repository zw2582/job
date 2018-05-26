import React from 'react';
import { InputItem,List } from 'antd-mobile'
import Input from 'antd-mobile/lib/input-item/Input';

class Chat extends React.Component {

    state={
        text:''
    }

    handleSend=()=>{
        console.log('发送:'+this.state.text);
        this.setState({text:''})
    }

    render() {
        return (
            <div>
                <div className="stickFooter">
                    <List>
                        <InputItem
                        placeholder="请输入"
                        value={this.state.text}
                        onChange={v=>{this.setState({text:v})}}
                        extra={<span onClick={this.handleSend}>发送</span>}></InputItem>
                    </List>
                </div>
            </div>
        )
    }
}

export default Chat