
import React, { Component } from 'react'
import './AppNavbar.css';

import {
	Collapse, Container,
	Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink
} from 'reactstrap'

class AppNavbar extends Component {
	state = {
		isOpen: false
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	render() {
		const { isOpen } = this.state;
		return (
			<div>
				<Navbar color="dark" dark expand="sm" className="mb-5">
					<Container>
						<NavbarBrand href="/">ShoppingList</NavbarBrand>
						<NavbarToggler onClick={ this.toggle } />
						<Collapse isOpen={ isOpen } navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="https://github.com/mishapodl">Github</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
};

export default AppNavbar;