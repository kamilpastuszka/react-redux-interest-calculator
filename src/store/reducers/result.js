import * as actionTypes from '../actions/actionTypes';

const initial = {
    totalPayment: '',
    monthlyPayment: '',
    calculating: false
}

const result = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_RESULTS:
            return {
                ...state,
                totalPayment: action.totalPayment,
                monthlyPayment: action.monthlyPayment,
                calculating: false
            }
        case actionTypes.SET_CALCULATING:
            return {
                ...state,
                calculating: true
            }
        default:
            return state
    }
}

export default result;