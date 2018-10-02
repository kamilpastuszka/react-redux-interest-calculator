import * as actionTypes from '../actions/actionTypes';

const initialState = {
    amount: '2',
    interest: '4',
    years: '1'
  }
  
  
  const input = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_AMOUNT:
        return {
          ...state,
          amount: action.amount
        }
      case actionTypes.SET_INTEREST:
        return {
          ...state,
          interest: action.interest
        }
      case actionTypes.SET_YEARS:
        return {
          ...state,
          years: action.years
        }
      default:
        return state
    }
  }
  
  export default input;