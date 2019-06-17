
import React, { Component } from 'react'
import './RegisterModal.css';

import {
	Button,
	Modal, ModalBody, ModalHeader, 
	FormGroup, Form, Label, Input,
	NavLink
} from 'reactstrap'

import { connect } from 'react-redux'

class RegisterModal extends Component {
	state = {
		modal: false,
		name: '',
		email: '',
		password: '',
		msg: null
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		})
	}

	onChange = e => {
		this.setState({ [e.target.email]: e.target.value })
	}

	onSubmit = e => {
		e.preventDefault();

		// 

		this.toggle();
	}

	render() {
		const { modal } = this.state;
		return (
			<div>
				<NavLink onClick={this.toggle} href="#">
					Register
				</NavLink>
				<Modal 
					isOpen={modal}
					toggle={this.toggle}
				>
					<ModalHeader toggle={this.toggle}>Register</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="name">Name</Label>
								<Input
									type="text"
									name="name"
									id="name"
									placeholder="Name"
									onChange={this.onChange}
								></Input>
								<Label for="email">Email</Label>
								<Input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									onChange={this.onChange}
								></Input>
								<Label for="password">Password</Label>
								<Input
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									onChange={this.onChange}
								></Input>
								<Button
									color="dark"
									style={{marginTop: '1rem'}}
									block
								>Register</Button>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
})

export default connect(mapStateToProps, {  })(RegisterModal);