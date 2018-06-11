export const calculateInterest = (amount, interestRate, years) => {
    
    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;
    let totalPayment;
    let monthlyPayment;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    
    if(isFinite(monthly)) {
        monthlyPayment = monthly.toFixed(2);
        totalPayment = (monthly * calculatedPayments).toFixed(2);    
      }
    
    return { 
        totalPayment, 
        monthlyPayment
    }
};

