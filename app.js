(function () {
  const $calculate = document.getElementById('calculate')
  const $chart = document.getElementById('chart').getContext('2d')

  const chart = makeChart($chart)

  $calculate.addEventListener('click', _ => {
    const principle = Number(document.getElementById('principle').value)
    const interestRate = Number(document.getElementById('interest').value)
    const compoundFreq = Number(document.getElementById('compound-freq').value)
    const years = Number(document.getElementById('years').value)
    const monthlyDeposit = Number(document.getElementById('monthly-deposit').value)
    const compoundedInterest = calculateYears(principle, interestRate, compoundFreq, years, monthlyDeposit)

    makeTable(compoundedInterest)
    updateChart(chart, compoundedInterest)    
  })
})()