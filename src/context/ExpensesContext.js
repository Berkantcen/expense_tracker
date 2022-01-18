import React from 'react'
import { createContext, useState } from 'react'

const ExpensesContext = createContext()

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        setExpenses,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContext
