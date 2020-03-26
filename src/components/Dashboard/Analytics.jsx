import React, { useEffect, useMemo, useRef, useState } from 'react';
import LineChart from './LineChart';
import { TRANSACTION_DATA } from '../constant';

const Analytics = ({ chartData, key, title, value }) => {
	const [text, setText] = useState('');
	const [data, setData] = useState();
	const zero = 0;
	useEffect(() => {
		if (chartData) {
			setText(chartData[1].title);
			setData(chartData[1].data);
		}
	}, [chartData]);
	console.log(data);
	return (
		<div className="analytics-container">
			<div className="chart">
				{data && (
					<LineChart
						borderWidth={zero}
						data={data}
						title={text}
						color="#86d0eb75"
						duration="month"
					/>
				)}
			</div>
			<div className="data-section">
				{TRANSACTION_DATA.map(data => {
					const { key, title, pending, fulfilled, total } = data;
					return (
						<div key={key} class="transaction-card">
							<h4>{title}</h4>
							<div class="progress-line">
								<div></div>
							</div>
							<ul>
								<li>
									{pending}
									<span class="pending-yellow">20</span>
								</li>
								<li>
									{fulfilled}
									<span class="fulfilled-green">80</span>
								</li>
								<li>
									{total}
									<span class="total-primary">100</span>
								</li>
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Analytics;
