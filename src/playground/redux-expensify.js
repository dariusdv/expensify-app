import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expeses Reducer

const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Filters reducer

const filtersReducerDefaultState = {
	text: 'rent',
	sortBy: 'amount', // date or amount
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Store creation

const store = createStore(
	combineReducers({
		expanses: expenseReducer,
		filters: filtersReducer
	})
);

console.log(store.getState());

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
