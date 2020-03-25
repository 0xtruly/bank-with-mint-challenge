import React, { useEffect, useMemo, useRef, useState } from 'react';
import LineChart from './LineChart';

const Cardlytics = ({ chartData, key, title, value }) => {
	const [text, setText] = useState('');
	const [data, setData] = useState();

	useEffect(() => {
		if (chartData) {
			setText(chartData[0].title);
			setData(chartData[0].data);
		}
	}, [chartData]);
	console.log(data);
	return (
		<div key={key}>
			<div>
				<p>{title}</p>
				<h4>{value}</h4>
			</div>
			<div>
				{data && (
					<LineChart
						data={data}
						title={text}
						color="#86d0eb75"
						duration="day"
					/>
				)}
			</div>
		</div>
	);
};

export default Cardlytics;
