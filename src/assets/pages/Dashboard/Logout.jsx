import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    // Add your logout logic here
    // For example, clear the user data from local storage
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');

    // Optionally, you could also call a logout API endpoint if needed
    // fetch('/api/logout', { method: 'POST' });

    // Redirect the user to the login page after logout
    history.push('/login');
  }, [history]);

  return (
    <div className="logout">
      <h3>Logging out...</h3>
    </div>
  );
};

export default Logout;
