
import React, { Component } from 'react'
import './ItemModal.css';

import {
   Button,
   Modal, ModalBody, ModalHeader, 
   FormGroup, Form, Label, Input,
   NavItem
} from 'reactstrap'

import { connect } from 'react-redux'
import { addItem } from '../../redux/actions/index'


class ItemModal extends Component {
   state = {
      modal: false,
      name: ''
   }

   toggle = () => {
      this.setState({
         modal: !this.state.modal
      })
   }

   onChange = e => {
      this.setState({ [e.target.name]: e.target.value })
   }

   onSubmit = e => {
      e.preventDefault();
      
      const newItem = {
         name: this.state.name
      }

      this.props.addItem(newItem);

      this.toggle();
   }

   render() {
      const { modal } = this.state;
      const { isAuthenticated } = this.props;
      return (
         <div>
            {
               isAuthenticated
               ? <Button
                  color="dark"
                  style={{marginBottom: '2rem'}}
                  onClick={this.toggle}
               >AddItem</Button>
               : `Please login for menage items`
            }
            <Modal 
               isOpen={modal}
               toggle={this.toggle}
            >
               <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
               <ModalBody>
                  <Form onSubmit={this.onSubmit}>
                     <FormGroup>
                        <Label for="item"></Label>
                        <Input
                           name="name"
                           id="item"
                           placeholder="Add to Shopping"
                           onChange={this.onChange}
                        ></Input>
                        <Button
                           color="dark"
                           style={{marginTop: '1rem'}}
                           block
                        >AddItem</Button>
                     </FormGroup>
                  </Form>
               </ModalBody>
            </Modal>
         </div>
      );
   }
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addItem })(ItemModal);