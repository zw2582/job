import React from 'react';
import { TabBar,Icon } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './footer.css'

@withRouter
class Footer extends React.Component {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            icon:PropTypes.string.isRequired,
            title:PropTypes.string.isRequired,
            path:PropTypes.string.isRequired
        })).isRequired
    }
    render() {
        const pathname = this.props.location.pathname
        const navList = this.props.data.filter(v=>!v.hide)
        return (
            <div className="footer">
                <TabBar>
                    {navList.map(v=>(
                        <TabBar.Item
                            key={v.path}
                            icon={<Icon type={v.icon} size="md" />}
                            selectedIcon={<Icon type={v.icon} size="md" color="green" />}
                            title={v.title}
                            onPress={()=>this.props.history.push(v.path)}
                            selected={v.path==pathname}
                        />
                    ))}
                </TabBar>
            </div>
        )
    }
}

export default Footer