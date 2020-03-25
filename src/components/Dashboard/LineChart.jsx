import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const LineChart = ({ color, data, duration, title }) => {
	const canvasRef = useRef();

	useEffect(() => {
		const myChart = new Chart(canvasRef.current, {
			type: 'line',
			options: {
				maintainAspectRatio: false,
				scales: {
					xAxes: [
						{
							type: 'time',
							time: {
								unit: duration
							},
							display: false
						}
					],
					yAxes: [
						{
							ticks: {
								min: 0
							},
							display: false
						}
					]
				}
			},
			data: {
				labels: data.map(datum => datum.time),
				datasets: [
					{
						// title: title,
						data: data.map(datum => datum.value),
						fill: 'start',
						backgroundColor: color,
						pointRadius: 0,
						borderColor: '#0294FF',
						lineTension: 0,
						borderWidth: 1
					}
				]
			}
		});
		myChart.data.labels = data.map(d => d.time);
		myChart.data.datasets[0].data = data.map(d => d.value);
		myChart.update();
	}, [data, duration, color, title]);

	return <canvas ref={canvasRef} />;
};

export default LineChart;
