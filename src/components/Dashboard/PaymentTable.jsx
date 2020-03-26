import React from 'react';
import { Table } from 'antd';
import { PAYMENT_TABLE_DATA } from '../constant';

const PaymentTable = () => {
	const PAGINATION_CONFIG = {
		hideOnSinglePage: true,
		pageSize: 10,
		itemRender: (page, type, originalElement) => {
			if (type === 'prev') {
				return <a href="#prev">Previous</a>;
			}
			if (type === 'next') {
				return <a href="#next">Next</a>;
			}
			return originalElement;
		}
	};

	const PAYMENT_TABLE_COLUMN = [
		{
			dataIndex: 'itemType',
			title: 'Item Type',
			key: 'itemType',
			render: itemType => (
				<div>
					<span
						style={{
							backgroundColor: '#647787',
							color: '#fff',
							textAlign: 'center',
							borderRadius: '50%',
							padding: '.7em',
							marginRight: '1em',
							display: 'inline-block'
						}}
					>
						VW
					</span>
					<span>{itemType}</span>
				</div>
			)
		},
		{
			dataIndex: 'price',
			title: 'Price',
			key: 'price'
		},
		{
			dataIndex: 'transactionNo',
			title: 'Transaction No',
			key: 'transactionNo'
		},
		{
			dataIndex: 'time',
			title: 'Time',
			key: 'time'
		},
		{
			dataIndex: 'status',
			key: 'status',
			render: status => {
				let color;
				if (status === 'Pending') {
					color = '#EBC315';
				} else if (status === 'Un-reconcilled') {
					color = '#7F8FA4';
				} else {
					color = '#27AE60';
				}
				return (
					<div
						style={{
							border: '1px solid #cccfd4',
							borderRadius: '20px',
							color: color,
							padding: '.4em 0',
							cursor: 'pointer'
						}}
					>
						<span
							style={{
								display: 'inline-block',
								backgroundColor: color,
								borderRadius: '50%',
								width: '8px',
								height: '8px',
								margin: '.2em .8em'
							}}
						/>
						<span>{status}</span>
					</div>
				);
			}
		}
	];

	return (
		<Table
			columns={PAYMENT_TABLE_COLUMN}
			dataSource={PAYMENT_TABLE_DATA}
			pagination={PAGINATION_CONFIG}
		/>
	);
};

export default PaymentTable;
