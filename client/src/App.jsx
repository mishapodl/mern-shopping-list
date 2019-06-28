import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppNavbar, ShoppingList, ItemModal } from './components/index';
import { Container } from 'reactstrap'

import { loadUser } from './redux/actions/action-user'
import { connect } from 'react-redux'

class App extends React.Component {
   componentDidMount() {
      this.props.loadUser()
   }
   
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

export default connect(null, { loadUser })(App);
