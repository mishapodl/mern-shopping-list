import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppNavbar, ShoppingList } from './components/index';


class App extends React.Component {
	render() {
		return (
			<div>
			  <AppNavbar />
			  <ShoppingList />
			</div>
		 );
	}
}

export default App;
