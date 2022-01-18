import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// COMPONENTS
import NewExpense from './components/NewExpense'
import ExpenseList from './components/ExpenseList'

function App() {
  return (
    <div className='container'>
      <ToastContainer
        autoClose={3000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
      <NewExpense />
      <ExpenseList />
    </div>
  )
}

export default App
