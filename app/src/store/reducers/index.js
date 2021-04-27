import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS } from "../actions"


const initialState = {
  quote: [],
  isLoading: false,
  error: ""
}

export const quoteReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
          isLoading: true,
          error: "" 
      }
    case FETCH_SUCCESS:
      return {
        ...state,
          quote: action.payload,
          isLoading: false,
          error: "" 
      }
    case FETCH_FAILURE:
      return {
        ...state,
          isLoading: true,
          error: action.payload 
      }
    default:
      return state

  }
    
}