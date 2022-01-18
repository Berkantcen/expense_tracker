import React from 'react'

const ExpenseItem = ({ expense }) => {
  const formatedDate = new Date(expense.date).toLocaleDateString()
  const year = formatedDate.split('.')[2]
  const month = Number(formatedDate.split('.')[1])
  const day = formatedDate.split('.')[0]
  const monthNames = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  }

  return (
    <div className='expense_item'>
      <div className='left_container'>
        <div className='date'>
          <p>{year}</p>
          <p>{monthNames[month]}</p>
          <p>{day}</p>
        </div>
        <h3>{expense.title}</h3>
      </div>
      <div className='right_container'>
        <p>$ {expense.amount}</p>
      </div>
    </div>
  )
}

export default ExpenseItem
