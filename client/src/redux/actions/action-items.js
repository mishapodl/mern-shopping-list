import { ITEMS } from "../constants/constants";
import axios from 'axios'

export const setItemsLoading = () => ({
	type: ITEMS.LOADING_ITEMS
})

export const getItems = () => dispatch => {
	dispatch(setItemsLoading());
	axios
		.get('/api/items')
		.then(res => {
			dispatch({
				type: ITEMS.GET_ITEMS,
				payload: res.data
			})
		})
};

export const addItem = item => dispatch => {
	axios
		.post('/api/items', item)
		.then(res => {
			dispatch({
				type: ITEMS.ADD_ITEM,
				payload: res.data
			})
		})
}

export const deleteItem = id => dispatch => {
	axios
		.delete(`/api/items/${id}`)
		.then(res => {
			dispatch({
				type: ITEMS.DELETE_ITEM,
				payload: id
			})
		})
}
