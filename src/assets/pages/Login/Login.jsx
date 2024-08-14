import axios from 'axios'; // Import axios for making HTTP requests
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Login/Login.css';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = "Email is required.";
        }
        if (!password) {
            newErrors.password = "Password is required.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            setLoading(true);
            try {
                console.log("in")
                const response = await axios.post('http://localhost:8080/api/users/login', {
                    email: email,
                    password: password,
                });
                console.log('User logged in:', response.data);
                setLoading(false);
                navigate('/Homepage1'); // Navigate to the dashboard or home page after successful login
            } catch (error) {
                console.error('Error logging in:', error.response ? error.response.data : error.message);
                setErrors({ auth: 'Failed to log in. Please try again.' });
                setLoading(false);
            }
        }
    };

    return (
    
        <div className="login-body">
                
            <div className="login-main">
                <h1>LOGIN</h1>
                {errors.auth && <p className="errP">{errors.auth}</p>}
                <p>Email</p>
                <input 
                    type='text' 
                    value={email} 
                    onChange={handleEmailChange} 
                />
                {errors.email && <p className="errP">{errors.email}</p>}
                <p>Password</p>
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password} 
                    onChange={handlePasswordChange} 
                />
                {errors.password && <p className="errP">{errors.password}</p>}
                <label className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={showPassword} 
                        onChange={() => setShowPassword(!showPassword)} 
                    />
                    Show Password
                </label>
                <center><button onClick={handleSubmit} disabled={loading}>Login</button></center>
                <center><button  disabled={loading}><Link to={'/AdminPage'}>Admin</Link></button></center>
                
                <p style={{ fontSize: '10px' }}>Don't have an account? <Link to={'/Signup'}>Register</Link></p>
             
            </div>
          
        </div>
        
    );
}

export default Login;
