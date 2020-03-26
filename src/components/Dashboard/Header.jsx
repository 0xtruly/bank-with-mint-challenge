import React from 'react';
import { Layout, Menu } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import Logo from '../icons/Logo';
import SearchComponent from './SearchComponent';
import { AVATAR } from '../constant';

const { Header } = Layout;

const HeaderComponent = () => {
	return (
		<Header className="header-section">
			<Logo />
			<SearchComponent
				className="header--searchbar"
				placeholder="Search..."
			/>
			<Menu mode="horizontal">
				<Menu.Item key="1">Support</Menu.Item>
				<Menu.Item key="2">FAQ</Menu.Item>
				<BellOutlined />
			</Menu>
			<div className="user">
				<div className="user--name">
					<span>Hello</span>
					<h4>Segun Adebanjo</h4>
				</div>
				<div className="user--profile">
					<img src={AVATAR} alt="user--profile" />
				</div>
			</div>
		</Header>
	);
};

export default HeaderComponent;
