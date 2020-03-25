import React from 'react';
import { Menu } from 'antd';
import { MenuIcon } from '../icons';
import {
	DASHBOARD_MENU_STRING_ONE,
	DASHBOARD_MENU_STRING_TWO,
	DASHBOARD_MENU_STRING_THREE,
	DASHBOARD_MENU_STRING_FOUR
} from '../constant';

const NavMenu = () => {
	return (
		<Menu mode="inline" className="menu-list">
			<span className="menu-title">Main</span>
			{DASHBOARD_MENU_STRING_ONE.map(menu => {
				const { iconName, text, key } = menu;
				return (
					<Menu.Item key={key}>
						<a href="#/" className="menu">
							<MenuIcon name={iconName} />
							<span>{text}</span>
						</a>
					</Menu.Item>
				);
			})}
			<span className="menu-title">Payments</span>
			{DASHBOARD_MENU_STRING_TWO.map(menu => {
				const { iconName, text, key } = menu;
				return (
					<Menu.Item key={key}>
						<a href="#/" className="menu">
							<MenuIcon name={iconName} />
							<span>{text}</span>
						</a>
					</Menu.Item>
				);
			})}
			<span className="menu-title">Orders</span>
			{DASHBOARD_MENU_STRING_THREE.map(menu => {
				const { iconName, text, key } = menu;
				return (
					<Menu.Item key={key}>
						<a href="#/" className="menu">
							<MenuIcon name={iconName} />
							<span>{text}</span>
						</a>
					</Menu.Item>
				);
			})}
			{DASHBOARD_MENU_STRING_FOUR.map(menu => {
				const { iconName, text, key } = menu;
				return (
					<Menu.Item key={key}>
						<a href="#/" className="menu">
							<MenuIcon name={iconName} />
							<span>{text}</span>
						</a>
					</Menu.Item>
				);
			})}
		</Menu>
	);
};

export default NavMenu;
