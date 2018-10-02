import * as actionTypes from './actionTypes';
import * as utility from '../../utility/utility';


const saveResults = (totalPayment, monthlyPayment) => {
    return {
        type: actionTypes.GET_RESULTS,
        totalPayment,
        monthlyPayment
    }
}

const showLoading = () => {
    return {
        type: actionTypes.SET_CALCULATING
    }
}

export const calculateResults = (amount, interest, years) => {
    return (dispatch) => {
        if (amount && interest && years) {
            dispatch(showLoading());
            const results = utility.calculateInterest(amount, interest, years);
            const totalPayment = results.totalPayment;
            const monthlyPayment = results.monthlyPayment;

            if (totalPayment && totalPayment) {
                setTimeout(() => {
                    dispatch(saveResults(totalPayment, monthlyPayment))
                }, 2500)
            }

        }
    }
}



