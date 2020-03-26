import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import HeaderComponent from './Header';
import NavMenu from './Menu';
import Cardlytics from './Cardlytics';
import { CARD_LYTICS_DATA } from '../constant';
import { getData } from './utils';
import Analytics from './Analytics';
import PaymentTable from './PaymentTable';
import SearchComponent from './SearchComponent';
import DropdownComponent from './Dropdown';

const { Content, Sider } = Layout;

const LayoutComponent = () => {
	const [chartData, setChartData] = useState('');

	useEffect(() => {
		setChartData(getData());
	}, []);

	const cardlytics = 'analytics';
	const graph = 'graph';
	const table = 'table';
	return (
		<Layout style={{ minHeight: '100vh', background: '#E5E5E5' }}>
			<HeaderComponent />
			<Layout className="layout-section">
				<Sider className="side-menu">
					<button className="btn invoice-btn">
						GENERATE INVOICE
					</button>
					<NavMenu />
				</Sider>

				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						background: '#f7f8fa'
					}}
				>
					<section role={cardlytics}>
						<div className="card">
							{CARD_LYTICS_DATA.map(data => {
								const { key, text, value } = data;
								return (
									<Cardlytics
										chartData={chartData}
										key={key}
										title={text}
										value={value}
									/>
								);
							})}
						</div>
					</section>
					<section role={graph}>
						<div className="card--section2">
							<Analytics chartData={chartData} />
						</div>
					</section>

					<section role={table}>
						<div className="payment--group">
							<div className="heading">
								<h2>Payments</h2>
							</div>
							<div className="content--grid">
								<span>
									Showing{' '}
									<a href="#20">
										20 <DownOutlined />
									</a>{' '}
									out of 500 payments
								</span>
								<SearchComponent placeholder="Search payments" />
								<DropdownComponent />
							</div>
						</div>
						<PaymentTable />
						<span className="footer">
							Showing 1 to 10 of 500 entries
						</span>
					</section>
				</Content>
			</Layout>
		</Layout>
	);
};

export default LayoutComponent;
