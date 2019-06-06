
import React, { Component } from 'react'
import './ShoppingList.css';
import uuid from 'uuid';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { getItems, deleteItem, } from '../../redux/actions/action-items'
import { connect } from 'react-redux'

class ShoppingList extends Component {
	componentDidMount() {
		this.props.getItems()
	}
	
	addItem = () => {
		let name = prompt('Enter item');
		if(name) {
			this.setState(state => ({
				items: [...state.items, { id: uuid(), name }]
			}));
		}
	}

	odHandlerDeleteItem = (id) => {
		this.props.deleteItem(id)
	}

	render() {
		console.log(this.props) 
		const { items } = this.props.items;
		return (
			<Container>
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
											onClick={this.odHandlerDeleteItem.bind(this, id)}
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
		);
	}
};

const mapStateToProps = state => ({
	items: state.items
})

const mapDispatchToProps = {
	getItems, deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);