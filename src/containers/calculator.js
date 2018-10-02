import React, { Component } from 'react';
import {Button} from '../components/button';
import {Input} from '../components/input';
import {Result} from '../components/result';
import {Loader} from '../components/loader';
import * as utility from '../utility/utility';
import { connect } from 'react-redux';
import {calculateResults} from '../store/actions/actions';

class Calculator extends Component {
  render() {
    const {amount, interest, years, totalPayment, monthlyPayment, calculating} = this.props;  
console.log('inside render'); 


const Results = () => (
  <div>
  <Result paymentType="Total Payment" paymentAmount={totalPayment} />
  <Result paymentType="Monthly Payment" paymentAmount={monthlyPayment}/>
  </div>
)
    return (
      <div className="container">     
        <Input name="Amount" value={amount} changed={this.props.setAmount}/>
         <Input name="Interest in %" value={interest} changed={this.props.setInterest}/>
        <Input name="Years" value={years} changed={this.props.setYears}/>
      <br/>
       <Button calculate={() => this.props.onCalculate(amount, interest, years)}>
        {calculating ? "Calculating.." : "Calculate"}
      </Button>
        <br/>
        {calculating ? <Loader/> : <Results/>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { amount, interest, years } = state.input;
  const { totalPayment, monthlyPayment, calculating} = state.result;
  return {
    amount, 
    interest, 
    years, 
    totalPayment,
    monthlyPayment,
    calculating
  };
}


const mapDispatchToProps = dispatch => {
  return {    
    setAmount: (e) => dispatch({type: 'SET_AMOUNT', amount: e.target.value}),
    setInterest: (e) => dispatch({type: 'SET_INTEREST', interest: e.target.value}),
    setYears: (e) => dispatch({type: 'SET_YEARS', years: e.target.value}),
    onCalculate: (amount, interest, years) => dispatch(calculateResults( amount, interest, years))
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Calculator);

