import {
    input
} from '../../store/reducers/input';


test('should set up initial state values', () => {
    const state = input(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual({
        amount: "10000",
        interest: "10",
        years: "1"
    })
});