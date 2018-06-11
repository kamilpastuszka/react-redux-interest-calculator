import React, { Component } from 'react';
import {Button} from './button';
import {InputRange} from './inputRange';
import {Result} from './result';
import * as utilis from '../utilis/utilis';

export default class Calulator extends Component {
    constructor() {
        super();
        this.state = {
                amount: '',
                interest: '',
                years: '',
                totalPayment: '',
                monthlyPayment: ''        
        }
    }
    
handleChange(name, value) {
  this.setState({ [name]: value});
}

calculateResults(a, i, y) {
  const results = utilis.calculateInterest(a, i, y);
  const totalPayment = results.totalPayment;
  const monthlyPayment = results.monthlyPayment;

  this.setState({totalPayment,monthlyPayment })
}

  render() {
    const {amount, interest, years, totalPayment, monthlyPayment} = this.state;  

    return (
      <div>          
        Amount <InputRange value={this.state.amount} changed={(e) => this.handleChange('amount', e.target.value)}/>
        Interest <InputRange value={this.state.interest} changed={(e) => this.handleChange('interest', e.target.value)}/>
        Years <InputRange value={this.state.years} changed={(e) => this.handleChange('years', e.target.value)}/>
      <br/>
       <Button calculate={() => this.calculateResults(amount, interest, years)}/>
      <br/>
       <Result paymentType="Total Payment" paymentAmount={totalPayment} />
       <Result paymentType="Montly Payment" paymentAmount={monthlyPayment}/>
      </div>
    )
  }
}