import { ITEMS } from "../constants/constants";
import axios from 'axios'
import { tokenConfig, returnErrors } from './index'

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
      .catch(err => (
         dispatch(returnErrors(err.response.data, err.response.status))
      ))
};

export const addItem = item => (dispatch, getState) => {
   axios
      .post('/api/items', item, tokenConfig(getState))
      .then(res => {
         dispatch({
            type: ITEMS.ADD_ITEM,
            payload: res.data
         })
      })
      .catch(err => (
         dispatch(returnErrors(err.response.data, err.response.status))
      ))
}

export const deleteItem = id => (dispatch, getState) => {
   axios
      .delete(`/api/items/${id}`, tokenConfig(getState))
      .then(res => {
         dispatch({
            type: ITEMS.DELETE_ITEM,
            payload: id
         })
      })
      .catch(err => (
         dispatch(returnErrors(err.response.data, err.response.status))
      ))
}
