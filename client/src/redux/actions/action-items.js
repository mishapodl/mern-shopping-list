import { ITEMS } from "../constants/constants";

export const getItems = () => ({
	type: ITEMS.GET_ITEMS
}) 

export const deleteItem = id => ({
	type: ITEMS.DELETE_ITEM,
	payload: id
})

export const addItem = item => ({
	type: ITEMS.ADD_ITEM,
	payload: item
}) 