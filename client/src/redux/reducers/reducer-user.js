import { USER } from '../constants/constants';

const inititalState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	isLoading: false,
	user: null,
}

function reducerUser (state = inititalState, action) {
	switch (action.type) {
		case USER.USER_LOADING:
			return {
				...state,
				isLoading: true
			};
		case USER.USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload
			}
		case USER.LOGIN_SUCCESS:
		case USER.REGISTER_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false
			}
		case USER.AUTH_ERROR:
		case USER.LOGIN_FAIL:
		case USER.REGISTER_FAIL:
		case USER.LOGOUT_SUCCESS:
			localStorage.removeItem('token')
			return {
				...state,
				token: null,
				isAuthenticated: false,
				isLoading: false,
				user: null
			}
		default: 
			return state;
	}
}

export default reducerUser;