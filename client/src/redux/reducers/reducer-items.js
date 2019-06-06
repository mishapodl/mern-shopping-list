import { ITEMS } from '../constants/constants'
import uuid from 'uuid';

const initialState = {
	items: [
		{ id: uuid(), name: 'Eggs'},
		{ id: uuid(), name: 'Milk'},
		{ id: uuid(), name: 'Water'},
		{ id: uuid(), name: 'Stake'},
	]
}

const reducerItems = (state = initialState, action) => {
	switch (action.type) {
		case ITEMS.GET_ITEMS:
			return {
				...state
			}
		case ITEMS.DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload)
			};
		case ITEMS.ADD_ITEM:
			return {
				...state,
				items: [action.payload, ...state.items]
			}
		default: return state;
	}
}

export default reducerItems;