import { combineReducers } from 'redux'


import reducerItems from './reducer-items'
import reducerUser from './reducer-user'
import reducerError from './reducer-error'

const rootReducer = combineReducers({
	items: reducerItems,
	error: reducerError,
	auth: reducerUser
})

export default rootReducer;