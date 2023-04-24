import { Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
// import { HomeOutlined, MoneyCollectOutlined, UserOutlined, SettingOutlined, MoneyCollectionOutlined, BulbOutlined, FundOutlined, MenoOutlined } from '@ant-design/icons'
// import Icon from '@ant-design/icons/lib/components/Icon';

import icon from '../assets/logo.jpg';

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">BlackChain</Link>
                </Typography.Title>
                {/* <Button className='Menu-control-container'>

                </Button> */}
            </div>
        </div>
    )
}