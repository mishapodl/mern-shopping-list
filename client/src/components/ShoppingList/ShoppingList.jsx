
import React, { Component } from 'react'
import './ShoppingList.css';

import PropTypes from 'prop-types';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { getItems, deleteItem, } from '../../redux/actions/action-items'
import { connect } from 'react-redux'


class ShoppingList extends Component {
   static propTypes = {
      getItems: PropTypes.func.isRequired,
      item: PropTypes.object.isRequired,
    };
   componentDidMount() {
      this.props.getItems()
   }

   odHandlerDeleteItem = (id) => {
      this.props.deleteItem(id)
   }

   render() {
      const { items } = this.props.items;
      return (
         <Container>
            <ListGroup>
               <TransitionGroup className="shopping-list">
                  {
                     items.map(({ _id, name }) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                           <ListGroupItem>
                              <Button
                                 className="remove-btn"
                                 color="danger"
                                 size="sm"
                                 onClick={this.odHandlerDeleteItem.bind(this, _id)}
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