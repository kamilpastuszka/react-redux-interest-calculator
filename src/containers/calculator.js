import React, { Component } from 'react';
import {Button} from '../components/button';
import {Input} from '../components/input';
import {Result} from '../components/result';
import * as utility from '../utility/utility';
import { connect } from 'react-redux';
import {calculateResults} from '../store/actions/actions';

class Calculator extends Component {
  render() {
    const {amount, interest, years, totalPayment, monthlyPayment, calculating} = this.props;  

    return (
      <div className="main">          
        Amount <Input value={amount} changed={this.props.setAmount}/>
        Interest in % <Input value={interest} changed={this.props.setInterest}/>
        Years <Input value={years} changed={this.props.setYears}/>
      <br/>
       <Button calculate={() => this.props.onCalculate(amount, interest, years)}>
        {this.props.calculating ? 
        <div> <i className="fa fa-spinner fa-spin"></i> Calculating..</div>
        : 
         "Calculate"}
      </Button>
      <br/>
       <Result paymentType="Total Payment" paymentAmount={totalPayment} />
       <Result paymentType="Monthly Payment" paymentAmount={monthlyPayment}/>
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

