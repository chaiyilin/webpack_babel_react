import React from 'react';

const PassingMapOrArrayOfProperties = ({ expense }) => (
	<div class='expense-details'>
		{
			_.reduce(expense, (acc, value, key) => {
				acc.push(<div>{key}<span>{value}</span></div>)
			}, [])
		}
	</div>
)

export default PassingMapOrArrayOfProperties