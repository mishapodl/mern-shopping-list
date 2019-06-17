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

const tokenConfig = getState => {
	const token = getState().auth.token

	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	}

	if(token) config.headers['x-auth-token'] = token;
	return config;

}
export { loadUser, tokenConfig }
