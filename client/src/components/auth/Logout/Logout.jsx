import React from 'react'
import './Logout.css';

import { connect } from 'react-redux'
import { logout } from '../../../redux/actions/index'
import { NavLink } from 'reactstrap'

const Logout = ({ logout }) => <NavLink onClick={logout}>Logout</NavLink>
export default connect(null, { logout })(Logout)