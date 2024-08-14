/*import React, { useState } from 'react';
import './SavingsPage.css';

const SavingsPage = () => {
  const [savings, setSavings] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleAddSaving = (e) => {
    e.preventDefault();
    const newSaving = { description, amount: parseFloat(amount), category };
    setSavings([...savings, newSaving]);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className="savings-container">
      <h2>Savings and Gifts</h2>
      <form onSubmit={handleAddSaving} className="saving-form">
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="gift">Gift</option>
            <option value="savings">Savings</option>
          </select>
        </div>
        <button type="submit" className="add-button">Add</button>
        <br></br>
      </form>
     
      <ul className="savings-list">
        {savings.map((saving, index) => (
          <li key={index} className={`saving-item ${saving.category}`}>
            <p>{saving.description}</p>
            <p>${saving.amount.toFixed(2)}</p>
            <p>{saving.category}</p>
          </li>
        ))}
      </ul>
      <br></br>
    </div>
  );
};

export default SavingsPage;*/



/*import React, { useState } from 'react';
import './SavingsPage.css';
import axios from 'axios';
const SavingsPage = () => {
  const [savings, setSavings] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');


  const handleAddSaving = async (e) => {
    e.preventDefault();
    const newSaving = { description, amount: parseFloat(amount), category };
    setSavings([...savings, newSaving]);
    try {
      if (editIndex !== null) {
        // Update existing saving
        const id = savings[editIndex].id;
        await axios.put(`/api/savings/${id}`, newSaving);
        const updatedSavings = [...savings];
        updatedSavings[editIndex] = newSaving;
        setSavings(updatedSavings);
        setEditIndex(null);
      } else {
        // Add new saving
        await axios.post('http://localhost:8080/api/savings', newSaving);
        setSavings([...savings, newSaving]);
      }
    } catch (error) {
      console.error('Error adding/updating saving:', error);
    }

    // Clear input fields
    setDescription('');
    setAmount('');
    setCategory('');
  };
  

/*const handleAddSaving = (e) => {
    e.preventDefault();
    const newSaving = { description, amount: parseFloat(amount), category };
    setSavings([...savings, newSaving]);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className="savings-container">
      <div className="savings-content">
        <h2>Savings and Gifts</h2>
        <form onSubmit={handleAddSaving} className="saving-form">
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="gift">Gift</option>
              <option value="savings">Savings</option>
            </select>
          </div>
          <button type="submit" className="add-button">Add</button>
        </form>
        
        <ul className="savings-list">
          {savings.map((saving, index) => (
            <li key={index} className={`saving-item ${saving.category}`}>
              <p>{saving.description}</p>
              <p>${saving.amount.toFixed(2)}</p>
              <p>{saving.category}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="savings-image">
        <img src="https://fieldforceconnect.com/wp-content/uploads/2020/08/aa-14-Copy.png" alt="Savings" />
      </div>
    </div>
  );
};

export default SavingsPage;

*/



import axios from 'axios'; // Import Axios
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import  './SavingsPage.css';

const SavingsPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        date: new Date(),
        income: {
            paycheck: '',
            sideHustle: ''
        },
        expenses: {
            giving: '',
            rent: '',
            utilities: '',
            groceries: '',
            funMoney: ''
        }
    });

    const [newExpenseName, setNewExpenseName] = useState('');

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, email: value });
        // You can fetch user data if needed
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('income.')) {
            const field = name.split('.')[1];
            setFormData({
                ...formData,
                income: { ...formData.income, [field]: value }
            });
        } else if (name.startsWith('expenses.')) {
            const field = name.split('.')[1];
            setFormData({
                ...formData,
                expenses: { ...formData.expenses, [field]: value }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            date: date
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
        try {
            // Send form data to backend
            const response = await axios.post('http://localhost:8080/api/finance/save', formData);
            console.log('Data submitted successfully:', response.data);
            // Optionally reset form or show success message
        } catch (error) {
            console.error('Error submitting data:', error);
            // Show error message to user
        }
    };
    

    const addExpenseField = (expenseName) => {
        if (!expenseName) return;

        const formattedName = expenseName
            .toLowerCase()
            .replace(/\s+/g, '')
            .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
                index === 0 ? word.toLowerCase() : word.toUpperCase()
            )
            .replace(/\s+/g, '');

        setFormData({
            ...formData,
            expenses: {
                ...formData.expenses,
                [formattedName]: ''
            }
        });

        setNewExpenseName('');
    };

    return (
        <div className="finance-form-container">
            <form className="finance-form-wrapper" onSubmit={handleSubmit}>
                <h2 className="finance-form-title">Finance Tracker</h2>

                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleEmailChange} 
                    placeholder="Enter Email"
                    className="input-finance-email"
                    required
                />

                <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    placeholderText='Enter month'
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                    className="input-finance-date"
                />

                <h3 className="finance-form-section-title">Income</h3>
                <input 
                    type="number" 
                    name="income.paycheck" 
                    value={formData.income.paycheck} 
                    onChange={handleChange} 
                    placeholder="Paycheck"
                    className="input-finance-paycheck"
                    required
                />

                <input 
                    type="number" 
                    name="income.sideHustle" 
                    value={formData.income.sideHustle} 
                    onChange={handleChange} 
                    placeholder="Side Hustle"
                    className="input-finance-side-hustle"
                    required
                />

                <h3 className="finance-form-section-title">Expenses</h3>
                {Object.keys(formData.expenses).map((key) => (
                    <input
                        key={key}
                        type="number"
                        name={`expenses.${key}`}

                        // name={expenses.${key}}
                        value={formData.expenses[key]}
                        onChange={handleChange}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        className="input-finance-expense-amount"
                        required
                    />
                ))}
                <input 
                    type="text" 
                    value={newExpenseName} 
                    onChange={(e) => setNewExpenseName(e.target.value)} 
                    placeholder="Enter Expense Name"
                    className="input-finance-expense-name"
                />
                {/* <button 
                    type="button" 
                    className="button-add-finance-expense"
                    onClick={() => addExpenseField(newExpenseName)}
                >
                    Add Expense
                </button> */}

                <button type="submit" className="button-submit-finance-form">Submit</button>
            </form>
        </div>
    );
};

export default SavingsPage;