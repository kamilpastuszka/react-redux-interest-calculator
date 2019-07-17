import {
    saveResults,
    showLoading,
    calculateResults
} from '../../store/actions/actions';


test('should save totalPayment and monthlyPayment', () => {
    const action = saveResults(1000, 10)
    expect(action).toEqual({
        type: 'GET_RESULTS',
        monthlyPayment: 10,
        totalPayment: 1000
    })
})