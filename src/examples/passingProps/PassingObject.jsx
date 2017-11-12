import React from 'react';

const ExpenseDetails = ({ expense }) => (
	<div className='expense-details'>
		<div>Category: <span>{expense.category}</span></div>
		<div>Description: <span>{expense.description}</span></div>
		<div>Amount: <span>{expense.amount}</span></div>
		<div>Date: <span>{expense.doneAt}</span></div>
	</div>
)

export default ExpenseDetails