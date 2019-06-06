import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppNavbar } from './components/index';


class App extends React.Component {
	render() {
		return (
			<div>
			  <AppNavbar />
			</div>
		 );
	}
}

export default App;
