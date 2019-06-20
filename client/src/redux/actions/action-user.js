import axios from 'axios'
import { USER } from '../constants/constants'
import { returnErrors } from './action-errors';

const loadUser = () => (dispatch, getState) => {
	dispatch({ type: USER.USER_LOADING })

	axios.get('/api/auth/user', tokenConfig(getState))
		.then(res => {
			dispatch({
				type: USER.USER_LOADED,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: USER.AUTH_ERROR
			})
		})
}

const register = ({ name, email, password }) => dispatch => {
	
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const body = JSON.stringify({ name, email, password }) 

	axios.post('/api/users', body, config)
		.then(res => {
			dispatch({
				type: USER.REGISTER_SUCCESS,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status, USER.REGISTER_FAIL));
			dispatch({
				type: USER.REGISTER_FAIL
			})
		})
}

const login = ({ email, password }) => dispatch => {
	
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const body = JSON.stringify({ email, password }) 

	axios.post('/api/auth', body, config)
		.then(res => {
			dispatch({
				type: USER.LOGIN_SUCCESS,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status, USER.LOGIN_FAIL));
			dispatch({
				type: USER.LOGIN_FAIL
			})
		})
}

const logout = () => {
	console.log(123)
	return {
		type: USER.LOGOUT_SUCCESS
	}
}

const tokenConfig = getState => {
	const token = getState().auth.token

	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	if(token) config.headers['x-auth-token'] = token;
	return config;

}

export { loadUser, tokenConfig, register, logout, login }