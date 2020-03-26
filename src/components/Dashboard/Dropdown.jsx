import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
	<Menu>
		<Menu.Item key="1">All</Menu.Item>
		<Menu.Item key="2">Reconcilled</Menu.Item>
		<Menu.Item key="3">Un-reconcilled</Menu.Item>
		<Menu.Item key="4">Settled</Menu.Item>
		<Menu.Item key="5">Unsettled</Menu.Item>
	</Menu>
);

const DropdownComponent = () => {
	return (
		<Dropdown overlay={menu}>
			<Button className="dropdown--btn">
				<span className="text">All</span>
				<DownOutlined />
			</Button>
		</Dropdown>
	);
};

export default DropdownComponent;
