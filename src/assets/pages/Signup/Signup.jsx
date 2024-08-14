



/*import axios from 'axios'; // Import axios for making HTTP requests
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Signup/signup.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRPassword, setShowRPassword] = useState(false);
    const navigate = useNavigate();

    function registration() {
        if ((username.trim().length === 0) || (password.trim().length === 0) || (email.trim().length === 0)) {
            setNameErr(true);
        } else if (!email.includes('@') || !email.includes('.') || !email.includes('com')) {
            alert('Please enter a valid email address');
           
        } else if (password.length < 5) {
            alert('Please enter a password with more than eight characters');
        } else if (password !== confirmPassword) {
            alert('Passwords do not match');
            navigate('/Signup');
        } 
       
        else {
            setNameErr(false);
            const user = { name: username, email: email, password: password };

            axios.post('http://localhost:8080/api/users/signup', user)
                .then(response => {
                    console.log(response.data);
                    navigate('/login');
                })
                .catch(error => {
                    console.error('There was an error registering the user!', error);
                });
        }
    }

    return (
        <div className="register-body">
            <div className="register-main">
                <h1>REGISTER</h1>
                {nameErr && <p className="errP">Please fill every input field</p>}
                <p>Name</p>
                <input 
                    type='text' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <p>Email</p>
                <input 
                    type='text' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <p>Password</p>
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <div className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={showPassword} 
                        onChange={() => setShowPassword(!showPassword)} 
                    />
                    <label>Show Password</label>
                </div>
                <p>Confirm Password</p>
                <input 
                    type={showRPassword ? 'text' : 'password'} 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <div className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={showRPassword} 
                        onChange={() => setShowRPassword(!showRPassword)} 
                    />
                    <label>Show Password</label>
                </div>
               <center><Link to={'/Signup'}><button onClick={registration}>Register</button></Link></center>
               <p style={{ fontSize: '10px' }}>Already have an account? <Link to={'/login'}>Login</Link></p>
            </div>
        </div>
    );
}

export default Register;
*/





import axios from 'axios'; // Import axios for making HTTP requests
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Signup/signup.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRPassword, setShowRPassword] = useState(false);
    const navigate = useNavigate();

    function registration() {
        if ((username.trim().length === 0) || (password.trim().length === 0) || (email.trim().length === 0)) {
            setNameErr(true);
        } else if (!email.includes('@') || !email.includes('.') || !email.includes('com')) {
            alert('Please enter a valid email address');
           
        } else if (password.length < 5) {
            alert('Please enter a password with more than eight characters');
        } else if (password !== confirmPassword) {
            alert('Passwords do not match');
            navigate('/Signup');
        } 
       
        else {
            setNameErr(false);
            const user = { name: username, email: email, password: password };

            axios.post('http://localhost:8080/api/users/signup', user)
                .then(response => {
                    console.log(response.data);
                    // Save user data to localStorage
                    localStorage.setItem('user', JSON.stringify(user));
                    navigate('/login');
                })
                .catch(error => {
                    console.error('There was an error registering the user!', error);
                });
        }
    }

    return (
        <div className="register-body">
            <div className="register-main">
                <h1>REGISTER</h1>
                {nameErr && <p className="errP">Please fill every input field</p>}
                <p>Name</p>
                <input 
                    type='text' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <p>Email</p>
                <input 
                    type='text' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <p>Password</p>
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <div className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={showPassword} 
                        onChange={() => setShowPassword(!showPassword)} 
                    />
                    <label>Show Password</label>
                </div>
                <p>Confirm Password</p>
                <input 
                    type={showRPassword ? 'text' : 'password'} 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <div className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={showRPassword} 
                        onChange={() => setShowRPassword(!showRPassword)} 
                    />
                    <label>Show Password</label>
                </div>
               <center><Link to={'/Signup'}><button onClick={registration}>Register</button></Link></center>
               <p style={{ fontSize: '10px' }}>Already have an account? <Link to={'/login'}>Login</Link></p>
            </div>
        </div>
    );
}

export default Register;
