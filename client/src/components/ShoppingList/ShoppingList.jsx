
import React, { Component } from 'react'
import './ShoppingList.css';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { deleteItem, getItems } from '../../redux/actions/index'
import { connect } from 'react-redux'


class ShoppingList extends Component {

   componentDidMount() {
      this.props.getItems()
   }

   odHandlerDeleteItem = (id) => {
      this.props.deleteItem(id)
   }

   render() {
      const { items: { items }, isAuthenticated } = this.props; 
      return (
         <Container>
            <ListGroup>
               <TransitionGroup className="shopping-list">
                  {
                     items.map(({ _id, name }) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                           <ListGroupItem>
                              {
                                 isAuthenticated
                               ? <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={ this.odHandlerDeleteItem.bind(this, _id) }
                                 >
                                    &times;
                                 </Button>
                              : null
                              }
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
   items: state.items,
   isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {
   getItems, deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);