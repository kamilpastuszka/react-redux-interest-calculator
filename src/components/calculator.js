import React, { Component } from 'react';
import {Button} from './button';
import {Input} from './input';
import {Result} from './result';
import * as utility from '../utility/utility';

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
                amount: '',
                interest: '',
                years: '',
                totalPayment: '',
                monthlyPayment: '',
                calculating: false    
        }
    }

handleChange(name, value) {
  this.setState({ [name]: value});
}

calculateResults(amount, interest, years) {
  const results = utility.calculateInterest(amount, interest, years);
  const totalPayment = results.totalPayment;
  const monthlyPayment = results.monthlyPayment;

  this.setState({
    ...this.state, 
    calculating: true
  })
  setTimeout(() => {
    this.setState({
      ...this.state,
      totalPayment,
      monthlyPayment,
      calculating: false
     })
  },2000)
}

  render() {
    const {amount, interest, years, totalPayment, monthlyPayment, calculating} = this.state;  

    return (
      <div>          
        Amount <Input value={this.state.amount} changed={(e) => this.handleChange('amount', e.target.value)}/>
        Interest <Input value={this.state.interest} changed={(e) => this.handleChange('interest', e.target.value)}/>
        Years <Input value={this.state.years} changed={(e) => this.handleChange('years', e.target.value)}/>
      <br/>
       <Button calculate={() => this.calculateResults(amount, interest, years)}>
        {calculating ? 
        <div> <i className="fa fa-spinner fa-spin"></i> Calculating..</div>
        : 
         "Calculate"}
      </Button>
      <br/>
       <Result paymentType="Total Payment" paymentAmount={totalPayment} />
       <Result paymentType="Montly Payment" paymentAmount={monthlyPayment}/>
      </div>
    )
  }
}
