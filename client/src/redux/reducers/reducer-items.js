import { ITEMS } from '../constants/constants'

const initialState = {
   items: [],
   loading: false
}

const reducerItems = (state = initialState, action) => {
   switch (action.type) {
      case ITEMS.GET_ITEMS:
         return {
            ...state,
            items: action.payload,
            loading: false
         }
      case ITEMS.DELETE_ITEM:
         return {
            ...state,
            items: state.items.filter(item => item._id !== action.payload)
         };
      case ITEMS.ADD_ITEM:
         return {
            ...state,
            items: [action.payload, ...state.items]
         }
      case ITEMS.LOADING_ITEMS:
         return {
            ...state,
            loading: true
         }
      default: return state;
   }
}

export default reducerItems;