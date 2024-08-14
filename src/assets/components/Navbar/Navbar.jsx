/*import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import "./Navbar.css";
import { FiLogIn } from "react-icons/fi";
import {Link} from 'react-router-dom';
import ExpenseCalculator from "../../pages/Expense/ExpenseCalculator";
import Services from "../../pages/Services/Services";
import UserDashboard from "../../../UserDashboard";
export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="left">
                <img src="https://joyofandroid.com/wp-content/uploads/2019/06/monefy-money-manager-best-android-business-expense-tracker-finance-financial-income-list-add-deduct-minus-computer-smartphone.png" alt="logo" />
            <h2><c>cash crash</c></h2></div>
            <div className="right">
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>

                    <li>
                        <NavLink to={"/ExpenseCalculator"}>Expense</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Services"}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/UserDashboard"}>UserDashboard</NavLink>
                    </li>
                  
                   
                  
                </ul>
                <button
                    className="btn-primary align-center"
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    <span>Login</span>
                    <FiLogIn className="icon" />
                </button>
            </div>
        </nav>
    );
}*/

// components/Navbar/Navbar.js
/*import { NavLink, useNavigate } from 'react-router-dom';
import '../../../App.css';
import './Navbar.css';
import { FiLogIn } from 'react-icons/fi';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="left">
                <img src="src\512x512bb.jpg" alt="logo" />
                <h2><span><i>Budget Buddy</i></span></h2>
            </div>
            <div className="right">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ExpenseCalculator">Expense</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Analytics">Analytics</NavLink>
                    </li>
                  
                </ul>
                <button
                    className="btn-primary align-center"
                    onClick={() => {
                        navigate('/login');
                    }}
                >
                    <span>Login</span>
                    <FiLogIn className="icon" />
                </button>
            </div>
        </nav>
    );
}
*/


// components/Navbar/Navbar.js
import { NavLink, useNavigate } from 'react-router-dom';
import '../../../App.css';
import './Navbar.css';
import { FiLogIn, FiUser } from 'react-icons/fi'; // Importing profile icon

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="left">
                <img src="src\512x512bb.jpg" alt="logo" />
                {/* <h2><span><i>Budget Buddy</i></span></h2> */}
            </div>
            <div className="right">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ExpenseCalculator">Expense</NavLink>
                    </li>
                    <li>
                        <NavLink to="/SavingsPage">Category</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Analytics">Analytics</NavLink>
                    </li>
                </ul>
                <button
                    className="btn-primary align-center"
                    onClick={() => {
                        navigate('/login');
                    }}
                >
                    <span>Login</span>
                    <FiLogIn className="icon" />
                </button>
                <div className="profile-icon" onClick={() => navigate('/ProfilePage')}>
                    <FiUser size={24} /> {/* Profile icon */}
                </div>
            </div>
        </nav>
    );
}
