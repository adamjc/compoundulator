function makeTable (data) {
  let $tableBody = document.getElementById('table-body')
  $tableBody.innerHTML = '';

  const $rows = data.map(el => {    
    let $year = document.createElement('td')
    let $yearDeposits = document.createElement('td')
    let $yearInterest = document.createElement('td')
    let $totalDeposits = document.createElement('td')
    let $totalInterest = document.createElement('td')
    let $balance = document.createElement('td')
    
    $year.innerHTML = el.x
    $balance.innerHTML = el.y.toLocaleString()
    $yearDeposits.innerHTML = el.yearDeposits.toLocaleString()
    $yearInterest.innerHTML = el.yearInterest.toLocaleString()
    $totalDeposits.innerHTML = el.totalDeposits.toLocaleString()
    $totalInterest.innerHTML = el.totalInterest.toLocaleString()

    let $row = document.createElement('tr')
    $row.appendChild($year)
    $row.appendChild($yearDeposits)
    $row.appendChild($yearInterest)
    $row.appendChild($totalDeposits)
    $row.appendChild($totalInterest)
    $row.appendChild($balance)    

    return $row
  })

  $rows.forEach($row => $tableBody.appendChild($row))
}