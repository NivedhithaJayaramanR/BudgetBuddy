import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  const [students, setStudents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const adminUsername = 'Nivedhitha';
    const adminPassword = '3';
    
    if (username === adminUsername && password === adminPassword) {
      setIsLoggedIn(true);
      navigate('/dashboard'); // Redirect to Dashboard on successful login
    } else {
      alert('Invalid credentials');
    }
  };

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="admin-container">
      {isLoggedIn ? (
        <div>
          <h2>Student Profiles</h2>
          <ul>
            {students.map((student, index) => (
              <li key={index}>
                <img src={student.image} alt="Student" width="100" height="100" />
                <p>{student.name}</p>
                <p>{student.email}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="login-container">
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPage;





/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'lathika@example.com' && password === 'lathika@17') {
      setCurrentUser({ email, role: 'admin' });
      setIsLoggedIn(true);
      navigate('/Dashboard');
    } else if (email === 'user@example.com' && password === 'user') {
      setCurrentUser({ email, role: 'user' });
      setIsLoggedIn(true);
      navigate('/Homepage');
    } else {
      alert('Invalid credentials');
    }
  };

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="admin-container">
      {isLoggedIn ? (
        <div>
          <h2>Student Profiles</h2>
          <ul>
            {students.map((student, index) => (
              <li key={index}>
                <img src={student.image} alt="Student" width="100" height="100" />
                <p>{student.name}</p>
                <p>{student.email}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="login-container">
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPage;

*/
