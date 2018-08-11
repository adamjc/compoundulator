function makeChart ($el) {
  return new Chart($el, {
    type: 'line',
    data: {      
    },
    options: {      
      tooltips: {
        mode: 'nearest',
        intersect: false,
        displayColors: false,
        callbacks: {          
          title: (tooltipItem, data) => {            
            return `Year ${tooltipItem[0].xLabel}`
          }
        }
      },
      legend: false,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          type: 'linear',
          gridLines: {            
            display: false
          },
          ticks: {
            stepSize: 1
          }          
        }],
        yAxes: [{
          type: 'linear',
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: false
          }
        }]
      }
    }
  })
}

function updateChart (chart, compoundedInterest) {
  const data = {
    labels: Array.from(compoundedInterest.keys(), x => x + 1),
    datasets: [{      
      data: compoundedInterest.map(datum => {
        return {
          x: datum.year,
          y: datum.balance
        }
      }),
      borderWidth: 2,
      backgroundColor: 'transparent',
      borderColor: '#5bd1d5',
      radius: 0
    }]
  }

  chart.data = data
  chart.update()
}