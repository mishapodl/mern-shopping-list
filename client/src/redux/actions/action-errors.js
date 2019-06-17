import { USER } from '../constants/constants'

const returnErrors = ({ msg, status, id = null }) => {
	return {
		type: USER.GET_ERRORS,
		payload: { msg, status, id }
	}
}

const clearErrors = () => dispatch => {
	return {
		type: USER.CLEAR_ERRORS
	}
}

export { returnErrors, clearErrors }