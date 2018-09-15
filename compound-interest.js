const calculateYears = (function () {
  // principle - initial investment
  // interest - % interest
  // compoundFreq - 1 for yearly, 12 for monthly, 52 for weekly... etc

  function calculate (principle, interest, compoundFreq, numberOfYears) {
    const decimalInterest = interest / 100
    const rn = 1 + (decimalInterest / compoundFreq)
    const cf = compoundFreq * numberOfYears
    const compoundedInterest = principle * Math.pow(rn, cf)
    const roundedCompoundedInterest = Math.round(compoundedInterest * 100) / 100
    
    return roundedCompoundedInterest
  }
  
  function calculateYearWithAdditions (principle, interest, compoundFreq, monthlyDeposit) {
    return Array.from(new Array(12).keys()).reduce(acc => {
      return calculate(acc + monthlyDeposit, interest, compoundFreq, 1 / 12)
    }, principle)
  }
  
  function calculateYears (principle, interest, compoundFreq, numberOfYears, monthlyDeposit = 0) {
    const yearsArray = Array.from(new Array(numberOfYears).keys(), x => x + 1)

    const compoundedInterest = yearsArray.reduce((yearsData, _, index) => {    
      const newPrinciple = yearsData.length ? yearsData[index - 1].balance : principle      
      const compoundValue = calculateYearWithAdditions(newPrinciple, interest, compoundFreq, monthlyDeposit)
      
      return yearsData.concat({
        yearInterest: compoundValue - newPrinciple - monthlyDeposit * 12,
        yearDeposits: monthlyDeposit * 12,
        totalDeposits: (principle + monthlyDeposit * 12 * (index + 1)),
        totalInterest: compoundValue - principle - monthlyDeposit * 12 * index,
        year: index + 1,
        balance: calculateYearWithAdditions(newPrinciple, interest, compoundFreq, monthlyDeposit)
      })
    }, [])

    return compoundedInterest
  }

  return calculateYears
})()