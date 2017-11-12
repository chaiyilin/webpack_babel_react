import React from 'react';

const PassingOnlyRequiredProperties = ({ category, description, amount, date }) => (
	<div className='expense-details'>
		<div>Category: <span>{category}</span></div>
		<div>Description: <span>{description}</span></div>
		<div>Amount: <span>{amount}</span></div>
		<div>Date: <span>{date}</span></div>
	</div>
)

export default PassingOnlyRequiredProperties