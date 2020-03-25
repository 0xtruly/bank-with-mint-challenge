import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined
} from '@ant-design/icons';
import HeaderComponent from './Header';
import NavMenu from './Menu';

const { Content, Sider } = Layout;

const LayoutComponent = ({ children }) => {
	return (
		<Layout style={{ minHeight: '100vh', background: '#E5E5E5' }}>
			<HeaderComponent />
			<Layout className="layout-section">
				<Sider className="side-menu">
					<NavMenu />
				</Sider>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						background: '#E5E5E5'
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};

export default LayoutComponent;
