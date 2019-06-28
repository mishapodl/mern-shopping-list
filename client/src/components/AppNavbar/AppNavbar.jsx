
import React, { Component } from 'react'
import './AppNavbar.css';

import { connect } from 'react-redux'

import {
   Collapse, Container,
   Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, /* NavLink */
} from 'reactstrap'

import { RegisterModal, Logout, Login } from '../index';

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
      const { isAuthenticated, user } = this.props.auth;

      const isGuest = (
         <>
            <NavItem>
               <RegisterModal />
            </NavItem>
            <NavItem>
               <Login />
            </NavItem>
         </>
      )
      const isUser = (
         <>

            <NavItem>
               <span className="navbar-text mr-3">
                  <strong>{ user && `Hello ${user.name}` }</strong>
               </span>
            </NavItem>
            <NavItem>
               <Logout />
            </NavItem>
         </>
      )


      return (
         <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
               <Container>
                  <NavbarBrand href="/">ShoppingList</NavbarBrand>
                  <NavbarToggler onClick={ this.toggle } />
                  <Collapse isOpen={ this.state.isOpen } navbar>
                     <Nav className="ml-auto" navbar>
                        { isAuthenticated ? isUser : isGuest }
                     </Nav>
                  </Collapse>
               </Container>
            </Navbar>
         </div>
      );
   }
};

const mapStateToProps = state => ({
   auth: state.auth
 });

export default connect(mapStateToProps, null)(AppNavbar)