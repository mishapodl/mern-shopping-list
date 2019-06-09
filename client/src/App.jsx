import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppNavbar, ShoppingList, ItemModal } from './components/index';
import { Container } from 'reactstrap'


class App extends React.Component {
	render() {
		return (
			<div>
				<AppNavbar />
				<Container>
					<ItemModal />
					<ShoppingList />
				</Container>
			</div>
		 );
	}
}

export default App;
