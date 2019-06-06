
import React, { Component } from 'react'
import './ShoppingList.css';
import uuid from 'uuid';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class ShoppingList extends Component {
	state = {
		items: [
			{ id: uuid(), name: 'Eggs'},
			{ id: uuid(), name: 'Milk'},
			{ id: uuid(), name: 'Water'},
			{ id: uuid(), name: 'Stake'},
		]
	}

	addItem = () => {
		let name = prompt('Enter item');
		if(name) {
			this.setState(state => ({
				items: [...state.items, { id: uuid(), name }]
			}));
		}
	}

	render() {
		const { items } = this.state;
		return (
			<div>
				<Container>
					<Button
						color="dark"
						style={{marginBottom: '2rem'}}
						onClick={this.addItem}
					>
						AddItem
					</Button>

					<ListGroup>
						<TransitionGroup className="shopping-list">
							{
								items.map(({ id, name }) => (
									<CSSTransition key={id} timeout={500} classNames="fade">
										<ListGroupItem>
											<Button
												className="remove-btn"
												color="danger"
												size="sm"
												onClick={() => {
													this.setState(state => ({
														items: state.items.filter(item => item.id !== id)
													}))
												}}
											>
												&times;
											</Button>
											{ name }
										</ListGroupItem>
									</CSSTransition>
								))
							}
						</TransitionGroup>
					</ListGroup>
				</Container>
			</div>
		);
	}
};

export default ShoppingList;