import React from 'react';
import { Grid } from 'antd-mobile'

class UserAvatar extends React.Component {

    render() {
        const data = ['1.jpeg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpeg']
        return (
            <div>
                <Grid data={data} renderItem={item=>(
                    <div  style={{padding:'5px'}}>
                    <img src={require(`./img/${item}`)} width='100%' height='100%'/>
                    </div>
                )} onClick={this.props.clickHandler} columnNum={4} />
            </div>
        )
    }
}

export default UserAvatar