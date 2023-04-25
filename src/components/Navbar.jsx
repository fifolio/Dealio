import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../assets/logo.png';
import Homepage from './Homepage';
import Exchanges from './Exchanges';
import News from './News';
import Cryptocurrencies from './Cryptocurrencies';

export default function Navbar() {
    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">BlackChain</Link>
                </Typography.Title>
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/" element={<Homepage />}>Home</Link>
                </Menu.Item>

                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies" element={<Cryptocurrencies />}>Cryptocurrencies</Link>
                </Menu.Item>

                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges" element={<Exchanges />}>Exchanges</Link>
                </Menu.Item>

                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news" element={<News />}>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}