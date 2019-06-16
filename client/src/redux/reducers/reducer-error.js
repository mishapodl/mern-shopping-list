import { USER } from '../constants/constants';

const inititalState = {
	msg: {},
	status: null,
	id: null
}

function reducerError (state = inititalState, action) {
	switch (action.type) {
		case USER.GET_ERRORS:
			return {
				msg: action.payload.msg,
				status: action.payload.status,
				id: action.payload.id
			}
		case USER.CLEAR_ERRORS:
			return {
				msg: {},
				status: null,
				id: null
			}
		default: 
			return state;
	}
}

export default reducerError;