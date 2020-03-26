import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const LineChart = ({ borderWidth, color, data, duration, title }) => {
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
				},
				legend: {
					display: false
				},
				tooltips: {
					callbacks: {
						label: function(tooltipItem) {
							console.log(tooltipItem);
							return tooltipItem.yLabel;
						}
					}
				}
			},
			data: {
				labels: data.map(datum => datum.time),
				datasets: [
					{
						data: data.map(datum => datum.value),
						fill: 'start',
						backgroundColor: color,
						pointRadius: 0,
						borderColor: '#0294FF',
						lineTension: 0,
						borderWidth: borderWidth
					}
				]
			}
		});
		myChart.data.labels = data.map(d => d.time);
		myChart.data.datasets[0].data = data.map(d => d.value);
		myChart.update();
	}, [data, duration, color, title, borderWidth]);

	return <canvas ref={canvasRef} />;
};

export default LineChart;
