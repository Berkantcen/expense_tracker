import React from 'react'
import { useContext, useEffect, useState } from 'react'
import ExpensesContext from '../context/ExpensesContext'
import { toast } from 'react-toastify'
const NewExpense = () => {
  const { setExpenses } = useContext(ExpensesContext)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title === '' || amount === '' || date === '') {
      toast.error('Please fill all the fields')
    } else {
      setExpenses((prevExpenses) => [
        {
          title,
          amount,
          date,
        },
        ...prevExpenses,
      ])
      toast.success('Expense added successfully')
      setTitle('')
      setAmount('')
      setDate('')
    }
  }

  return (
    <div className='new_expense'>
      <form>
        <div className='form-group'>
          <label htmlFor='expense_title'>Title</label>
          <input
            type='text'
            value={title}
            className='form-control'
            id='expense_title'
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='expense_amount'>Amount</label>
          <input
            value={amount}
            type='number'
            className='form-control'
            id='expense_amount'
            onChange={(e) => {
              setAmount(e.target.value)
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='expense_title'>Date</label>
          <input
            value={date}
            type='date'
            className='form-control'
            id='expense_title'
            onChange={(e) => {
              setDate(e.target.value)
            }}
          />
        </div>
      </form>
      <button onClick={handleSubmit}>Add Expense</button>
    </div>
  )
}

export default NewExpense
