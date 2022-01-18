import React from 'react'
import { useContext, useState } from 'react'
import ExpensesContext from '../context/ExpensesContext'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
  const { expenses } = useContext(ExpensesContext)
  const [selectedFilter, setSelectedFilter] = useState('all')

  return (
    <div className='expense_list'>
      <div className='filter'>
        <p>Filter by year</p>
        <select
          onChange={(event) => {
            setSelectedFilter(event.target.value)
          }}
        >
          <option value='' hidden>
            Select
          </option>
          <option value='all'>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
        </select>
      </div>

      {/* EXPENSE ITEM */}
      {expenses.map((expense, idx) =>
        selectedFilter === 'all' ? (
          <ExpenseItem expense={expense} key={idx} />
        ) : selectedFilter == expense.date.split('-')[0] ? (
          <ExpenseItem expense={expense} key={idx} />
        ) : null
      )}
    </div>
  )
}

export default ExpenseList
