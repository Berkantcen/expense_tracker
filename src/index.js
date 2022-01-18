import React from 'react'
import ReactDOM from 'react-dom'
import { ExpensesProvider } from './context/ExpensesContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ExpensesProvider>
      <App />
    </ExpensesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
