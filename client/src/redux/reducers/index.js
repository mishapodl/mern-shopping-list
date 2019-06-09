import { combineReducers } from 'redux'


import reducerItems from './reducer-items'
import reducerUser from './reducer-user'

const rootReducer = combineReducers({
	items: reducerItems,
	users: reducerUser
})

export default rootReducer;