import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';

import { setPizzas } from './redux/actions/pizzas';

function App() {
	const dispatch = useDispatch();
	const { items } = useSelector(({ pizzas, filters }) => ({
		items: pizzas.items,
		sortBy: filters.sortBy,
	}));

	React.useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			dispatch(setPizzas(data.pizzas));
		});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Route exact path="/" render={() => <Home items={items} />} />
				<Route exact path="/cart" component={Cart} />
			</div>
		</div>
	);
}

export default App;
