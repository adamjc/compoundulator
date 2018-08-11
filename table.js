function makeTable (data) {
  let $tableBody = document.getElementById('table-body')
  $tableBody.innerHTML = '';

  const $rows = data.map(el => {
    const keys = ['year', 'yearDeposits', 'yearInterest', 'totalDeposits', 'totalInterest', 'balance']
    let $row = document.createElement('tr')

    keys.forEach(key => {
      let $el = document.createElement('td')
      $el.innerHTML = el[key].toLocaleString()
      $row.appendChild($el)
    })

    return $row
  })

  $rows.forEach($row => $tableBody.appendChild($row))
}