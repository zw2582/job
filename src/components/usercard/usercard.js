import React from 'react';
import { Card } from 'antd-mobile'
import PropTypes from 'prop-types'

class UserCard extends React.Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
        clickHandle: PropTypes.func.isRequired
    }

    render() {
        const data = this.props.data
        return (
            <div>
                {data.map(v=>(
                    <Card key={v.id} onClick={()=>this.props.clickHandle(v.id)} >
                        <Card.Header
                        title={v.name}  
                        thumb={<img src={require(`../user-avatar/img/${v.avatar}`)} width="40px" />}
                        extra={v.type==1?v.salary:v.position}
                        />
                        <Card.Body>
                            {v.company && v.company}
                            {v.type==2 && v.salary}
                            {v.type==1?v.summary:v.claim}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }
}

export default UserCard