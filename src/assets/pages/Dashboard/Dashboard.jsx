import React, { useState } from 'react';
import '../Dashboard/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faChartPie, faListAlt, faDollarSign, faBars, faCalendarAlt, faChartLine, faFileAlt, faCog, faSignOutAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard'); // Default to 'dashboard'

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="dashboard">
      <Sidebar
        isOpen={isSidebarOpen}
        onSidebarItemClick={handleSidebarItemClick} // Pass click handler to Sidebar
      />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}> 

        <div className="top-bar">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isSidebarOpen ? faChevronLeft : faChevronRight} />
          </button>
          {activeSection === 'dashboard' && (
            <>
              <div className="header-item">
                <FontAwesomeIcon icon={faMoneyBillWave} />
                <span>TOTAL EXPENSES: $50,000</span>
              </div>
              <div className="header-item">
                <FontAwesomeIcon icon={faChartPie} />
                <span>BUDGET: $100,000</span>
              </div>
              <div className="header-item">
                <FontAwesomeIcon icon={faListAlt} />
                <span>CATEGORIES: 8</span>
              </div>
              <div className="header-item">
                <FontAwesomeIcon icon={faDollarSign} />
                <span>SAVINGS: $5,000</span>
              </div>
            </>
          )}
        </div>
        <div className='stats-revenue'>
          {activeSection === 'dashboard' && (
            <>
              <Stats />
              <ExpenseChart />
              <LatestExpenses />
            </>
          )}
          {activeSection === 'expenses' && <Expenses />}
          {activeSection === 'budget' && <Budget />}
          {activeSection === 'categories' && <Categories />}
          {activeSection === 'reports' && <Reports />}
          {activeSection === 'settings' && <Settings />}
          {activeSection === 'calendar' && <Calendar />}
          {activeSection === 'logout' && <Logout />}
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, onSidebarItemClick }) => (
  <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}> 
    <ul>
      <li onClick={() => onSidebarItemClick('dashboard')}>
        <FontAwesomeIcon icon={faChartLine} /> {isOpen && 'Dashboard'}
      </li>
      <li onClick={() => onSidebarItemClick('expenses')}>
        <FontAwesomeIcon icon={faMoneyBillWave} /> {isOpen && 'Expenses'}
      </li>
      <li onClick={() => onSidebarItemClick('budget')}>
        <FontAwesomeIcon icon={faDollarSign} /> {isOpen && 'Budget'}
      </li>
      <li onClick={() => onSidebarItemClick('categories')}>
        <FontAwesomeIcon icon={faChartPie} /> {isOpen && 'Categories'}
      </li>
      <li onClick={() => onSidebarItemClick('reports')}>
        <FontAwesomeIcon icon={faFileAlt} /> {isOpen && 'Reports'}
      </li>
      <li onClick={() => onSidebarItemClick('settings')}>
        <FontAwesomeIcon icon={faCog} /> {isOpen && 'Settings'}
      </li>
      {/* <li onClick={() => onSidebarItemClick('calendar')}>
        <FontAwesomeIcon icon={faCalendarAlt} /> {isOpen && 'Calendar'}
      </li> */}
      <li onClick={() => onSidebarItemClick('logout')}>
        <FontAwesomeIcon icon={faSignOutAlt} /> {isOpen && 'Logout'}
      </li>
    </ul>
  </div>
);

const Stats = () => (
  <div className="stats">
    <div className="stat">
      <h3>Total Budget</h3>
      <div className="revenue">
        <div className="revenue-circle">50.0%</div>
        <div className="revenue-details">
          <p>Total budget this year: $100,000</p>
          <p>Spent: $50,000</p>
          <p>Remaining: $50,000</p>
          <p>Savings: $5,000</p>
        </div>
      </div>
    </div>
  </div>
);

const data = [
  { name: 'March', expenses: 5000 },
  { name: 'April', expenses: 7000 },
  { name: 'May', expenses: 6000 },
  { name: 'June', expenses: 8000 },
  { name: 'July', expenses: 10000 },
  { name: 'August', expenses: 9000 },
];

const ExpenseChart = () => (
  <div className="expense-chart">
    <h3>Monthly Expenses (Last 6 months)</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="expenses" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const LatestExpenses = () => (
  <div className="latest-expenses">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h3>Latest Expenses</h3>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8/15/2022</td>
          <td>Office Supplies</td>
          <td>Stationery</td>
          <td>$250</td>
        </tr>
        <tr>
          <td>8/14/2022</td>
          <td>Team Lunch</td>
          <td>Food</td>
          <td>$500</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
);

const Expenses = () => (
  <div className="expenses">
    <h3>Expenses Management</h3>
    {/* Add your Expenses component content here */}
  </div>
);

const Budget = () => (
  <div className="budget">
    <h3>Budget Management</h3>
    {/* Add your Budget component content here */}
  </div>
);

const Categories = () => (
  <div className="categories">
    <h3>Expense Categories</h3>
    {/* Add your Categories component content here */}
  </div>
);

const Reports = () => (
  <div className="reports">
    <h3>Financial Reports</h3>
    {/* Add your Reports component content here */}
  </div>
);

const Settings = () => (
  <div className="settings">
    <h3>Settings</h3>
    {/* Add your Settings component content here */}
  </div>
);

// const Calendar = () => (
//   <div className="calendar">
//     <h3>Calendar</h3>
//     {/* Add your Calendar component content here */}
//   </div>
// );







const Logout = () => (
  <div className="logout">
    <h3>Logging out...</h3>
    {/* Handle your logout logic here */}
  </div>
);

export default Dashboard;
