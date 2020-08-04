import { createStore, combineReducers } from 'redux';

const demoState = {
	expanses: [
		{
			id: 'dasd324asd34@3',
			description: 'December Rent',
			note: 'This was the final payment for that address',
			amount: 54500,
			createdAt: 0
		}
	],
	filters: {
		text: 'rent',
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	}
};
