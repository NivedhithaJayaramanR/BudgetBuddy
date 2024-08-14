import { NavLink, useNavigate } from 'react-router-dom';
import '../../../App.css';
import './Navbar.css';
import { FiLogIn, FiUser } from 'react-icons/fi'; // Importing profile icon

export default function Navbar1() {
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
                    {/* <li>
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
                    </li> */}
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
