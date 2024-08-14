/*import '../Expense/ExpenseCalculator.css';
// src/ExpenseCalculator.jsx
import React, { useState, useEffect } from 'react';
// import './ExpenseCalculator.css';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';


const ExpenseCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  

    
    // Calculate total expenses
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const balance = income - totalExpenses;
 
  const clearAllExpenses = () => {
    setExpenses([]);  // Clear all expenses
  };

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addIncome = (e) => {
    setIncome(e.target.value);
  };


  const handleExpenseSubmit = async () => {
    if (expenseName && expenseAmount && expenseCategory && expenseDate) {
        const newExpense = { name: expenseName, amount: parseFloat(expenseAmount), category: expenseCategory, date: expenseDate };

        try {
            let response;
            if (editIndex !== null) {
                response = await axios.put(`http://localhost:8080/api/expenses/${expenses[editIndex].id}`, newExpense);
                const updatedExpenses = [...expenses];
                updatedExpenses[editIndex] = response.data;
                setExpenses(updatedExpenses);
                setEditIndex(null);
            } else {
                response = await axios.post('http://localhost:8080/api/expenses/add', newExpense);
                setExpenses([...expenses, response.data]);
            }

            setExpenseName('');
            setExpenseAmount('');
            setExpenseCategory('');
            setExpenseDate('');
        } catch (error) {
            console.error("There was an error saving the expense!", error);
        }
    }
};

const editExpense = (index) => {
  const expense = expenses[index];
  setExpenseName(expense.name);
  setExpenseAmount(expense.amount);
  setExpenseCategory(expense.category);
  setExpenseDate(expense.date);
  setEditIndex(index);
};



const removeExpense = async (indexToRemove) => {
  try {
    await axios.delete(`http://localhost:8080/api/expenses/${expenses[indexToRemove].id}`);
    setExpenses(expenses.filter((_, index) => index !== indexToRemove));
  } catch (error) {
    console.error("There was an error deleting the expense!", error);
  }
};

  /*const handleExpenseSubmit = () => {
    if (expenseName && expenseAmount && expenseCategory && expenseDate) {
      const newExpense = { name: expenseName, amount: parseFloat(expenseAmount), category: expenseCategory, date: expenseDate };
      if (editIndex !== null) {
        const updatedExpenses = [...expenses];
        updatedExpenses[editIndex] = newExpense;
        setExpenses(updatedExpenses);
        setEditIndex(null);
      } else {
        setExpenses([...expenses, newExpense]);
      }
      setExpenseName('');
      setExpenseAmount('');
      setExpenseCategory('');
      setExpenseDate('');
    }
  };

  const editExpense = (index) => {
    const expense = expenses[index];
    setExpenseName(expense.name);
    setExpenseAmount(expense.amount);
    setExpenseCategory(expense.category);
    setExpenseDate(expense.date);
    setEditIndex(index);
  };

  const removeExpense = (indexToRemove) => {
    setExpenses(expenses.filter((_, index) => index !== indexToRemove));
  };

  const clearAllExpenses = () => {
    setExpenses([]);
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const balance = income - totalExpenses;

  console.log('Expenses:', expenses); // Log expenses to console

  return (
    <section>
<Navbar/>
    <div className="expensecontainer">

    <div className='cal'>
      <br></br>
      <h2 className='exa'>Expense Calculator</h2>
</div>


      <div style={{ marginBottom: '20px' }}>
        <h2 className='exa'>Income</h2>
        <input
          type="number"
          value={income}
          onChange={(e) => addIncome(e)}
          placeholder="Enter your income"
          className="small-input"
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 className='exa'>Add/Edit Expense</h2>
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="Expense name"
           className="small-input"
        />
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          placeholder="Expense amount"
           className="small-input"
        />
        <input
          type="text"
          value={expenseCategory}
          onChange={(e) => setExpenseCategory(e.target.value)}
          placeholder="Expense category"
           className="small-input"
        />
        <input
          type="date"
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
          placeholder="Expense date"
           className="small-input"
          
        />
        <br></br>
        <div className='but'>
        <button onClick={handleExpenseSubmit}>
          {editIndex !== null ? 'Update Expense' : 'Add Expense'}
        </button>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 className='exa'>Expenses</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <span>
                {expense.name} (${expense.amount.toFixed(2)}) - {expense.category} on {expense.date}
              </span>
              <div>
                <button onClick={() => editExpense(index)} style={{ marginLeft: '30px' }}>
                  Edit
                </button>
                <button onClick={() => removeExpense(index)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={clearAllExpenses}>
          Clear All Expenses
        </button>
      </div>

      <div className="expensesummary">
        <h2 className='exa'>Summary</h2>
        <p>Total Income: ${parseFloat(income || 0).toFixed(2)}</p>
        <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
        <p>Balance: ${balance.toFixed(2)}</p>
        
      </div>
  
    </div>
    </section>
    
  );
};

export default ExpenseCalculator;*/




import '../Expense/ExpenseCalculator.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';

const ExpenseCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const balance = income - totalExpenses;

  const clearAllExpenses = () => {
    setExpenses([]);
  };

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addIncome = (e) => {
    setIncome(e.target.value);
  };

  const handleExpenseSubmit = async () => {
    if (expenseName && expenseAmount && expenseCategory && expenseDate) {
        const newExpense = {
            name: expenseName,
            amount: parseFloat(expenseAmount),
            category: expenseCategory,
            date: expenseDate,
        };

        try {
            let response;
            if (editIndex !== null) {
                response = await axios.put(`http://localhost:8080/api/expenses/${expenses[editIndex].id}`, newExpense);
                console.log('PUT response:', response);
                const updatedExpenses = [...expenses];
                updatedExpenses[editIndex] = response.data;
                setExpenses(updatedExpenses);
                setEditIndex(null);
            } else {
                response = await axios.post('http://localhost:8080/api/expenses/add', newExpense);
                setExpenses([...expenses, response.data]);
            }

            setExpenseName('');
            setExpenseAmount('');
            setExpenseCategory('');
            setExpenseDate('');
        } catch (error) {
            console.error("There was an error saving the expense!", error);
        }
    }
};

  const editExpense = (index) => {
    const expense = expenses[index];
    setExpenseName(expense.name);
    setExpenseAmount(expense.amount);
    setExpenseCategory(expense.category);
    setExpenseDate(expense.date);
    setEditIndex(index);
  };

  const removeExpense = async (indexToRemove) => {
    try {
      await axios.delete(`http://localhost:8080/api/expenses/${expenses[indexToRemove].id}`);
      setExpenses(expenses.filter((_, index) => index !== indexToRemove));
    } catch (error) {
      console.error("There was an error deleting the expense!", error);
    }
  };

  return (
    <section>
      <Navbar />
      <div className="expensecontainer">
        <div className='cal'>
          <br></br>
          <h2 className='exa'>Expense Calculator</h2>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2 className='exa'>Income</h2>
          <input
            type="number"
            value={income}
            onChange={(e) => addIncome(e)}
            placeholder="Enter your income"
            className="small-input"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2 className='exa'>Add/Edit Expense</h2>
          <input
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            placeholder="Expense name"
            className="small-input"
          />
          <input
            type="number"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            placeholder="Expense amount"
            className="small-input"
          />
          <input
            type="text"
            value={expenseCategory}
            onChange={(e) => setExpenseCategory(e.target.value)}
            placeholder="Expense category"
            className="small-input"
          />
          <input
            type="date"
            value={expenseDate}
            onChange={(e) => setExpenseDate(e.target.value)}
            placeholder="Expense date"
            className="small-input"
          />
          <br></br>
          <div className='but'>
            <button onClick={handleExpenseSubmit}>
              {editIndex !== null ? 'Update Expense' : 'Add Expense'}
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2 className='exa'>Expenses</h2>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                <span>
                  {expense.name} (${expense.amount.toFixed(2)}) - {expense.category} on {expense.date}
                </span>
                <div>
                  <button onClick={() => editExpense(index)} style={{ marginLeft: '30px' }}>
                    Edit
                  </button>
                  <button onClick={() => removeExpense(index)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={clearAllExpenses}>
            Clear All Expenses
          </button>
        </div>

        <div className="expensesummary">
          <h2 className='exa'>Summary</h2>
          <p>Total Income: ${parseFloat(income || 0).toFixed(2)}</p>
          <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
          <p>Balance: ${balance.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
};

export default ExpenseCalculator;
