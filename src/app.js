import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => <div>This is from my dashboard component.</div>;

const AddExpansePage = () => <div>This is from my add expanse component.</div>;

const EditExpansePage = () => <div>This is from my edit expanse component.</div>;

const HelpPage = () => <div>This is from my help component.</div>;

const routes = (
	<BrowserRouter>
		<div>
			<Route path="/" component={ExpenseDashboardPage} exact={true} />
			<Route path="/create" component={AddExpansePage} />
			<Route path="/edit" component={EditExpansePage} />
			<Route path="/help" component={HelpPage} />
		</div>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
