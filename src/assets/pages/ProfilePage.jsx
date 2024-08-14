
/*import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate(); 
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState(user);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setEditValues(parsedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage on logout
    alert('Logged out successfully!');
    navigate('/');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUser(editValues);
    setIsEditing(false);
    localStorage.setItem('user', JSON.stringify(editValues)); // Update localStorage with new user data
  };

  const handleCancelClick = () => {
    setEditValues(user);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="account-page">
      <h2 className='Ac'>Account Settings</h2>
      <div className="profile-section">
        <FaUserCircle className="profile-icon" />
        <h3 className="pro">Profile</h3>
        {isEditing ? (
          <div>
            <label>
              <strong>Name:</strong>
              <input
                type="text"
                name="name"
                value={editValues.name}
                onChange={handleChange}
              />
            </label>
            <label>
              <strong>Email:</strong>
              <input
                type="email"
                name="email"
                value={editValues.email}
                onChange={handleChange}
              />
            </label>
            <div className="button-group">
              <button className="save-button" onClick={handleSaveClick}>Save</button>
              <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>
          </div>
        )}
      </div>
      <div className="settings-section">
        <h3>Settings</h3>
        {/* Add additional settings here }
      </div>
      <div className="logout-section">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
*/



/*import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const ProfilePage = () => {
  const navigate = useNavigate(); 
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState(user);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setEditValues(parsedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage on logout
    alert('Logged out successfully!');
    navigate('/');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  /*const handleSaveClick = async () => {
    try {
      // Send updated user data to the backend
      const response = await axios.put('http://localhost:8080/api/users/update', editValues);
      
      // If the update is successful, update the local state and localStorage
      setUser(response.data);
      setIsEditing(false);
      localStorage.setItem('user', JSON.stringify(response.data)); // Update localStorage with new user data
    } catch (error) {
      console.error('Error updating user:', error);
      alert('There was an error updating your profile. Please try again.');
    }
  };


const handleSaveClick = () => {
  axios.put('http://localhost:8080/api/users/update', editValues)
      .then(response => {
          setUser(response.data);
          setIsEditing(false);
          localStorage.setItem('user', JSON.stringify(response.data));
      })
      .catch(error => {
          console.error('Error updating user:', error);
          alert('Failed to update user. Please try again later.');
      });
};

  const handleCancelClick = () => {
    setEditValues(user);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="account-page">
      <h2 className='Ac'>Account Settings</h2>
      <div className="profile-section">
        <FaUserCircle className="profile-icon" />
        <h3 className="pro">Profile</h3>
        {isEditing ? (
          <div>
            <label>
              <strong>Name:</strong>
              <input
                type="text"
                name="name"
                value={editValues.name}
                onChange={handleChange}
              />
            </label>
            <label>
              <strong>Email:</strong>
              <input
                type="email"
                name="email"
                value={editValues.email}
                onChange={handleChange}
              />
            </label>
            <div className="button-group">
              <button className="save-button" onClick={handleSaveClick}>Save</button>
              <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>
          </div>
        )}
      </div>
      <div className="settings-section">
        <h3>Settings</h3>
        {/* Add additional settings here }
      </div>
      <div className="logout-section">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;*/
import React, { useState, useEffect } from 'react';
 import './ProfilePage.css';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const ProfilePage = () => {
  const navigate = useNavigate(); 
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState(user);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setEditValues(parsedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage on logout
    alert('Logged out successfully!');
    navigate('/');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  /*const handleSaveClick = async () => {
    try {
      // Send updated user data to the backend
      const response = await axios.put('http://localhost:8080/api/users/update', editValues);
      
      // If the update is successful, update the local state and localStorage
      setUser(response.data);
      setIsEditing(false);
      localStorage.setItem('user', JSON.stringify(response.data)); // Update localStorage with new user data
    } catch (error) {
      console.error('Error updating user:', error);
      alert('There was an error updating your profile. Please try again.');
    }
  };
*/
const handleSaveClick = async () => {
  try {
      const response = await axios.put('http://localhost:8080/api/users/update', editValues);
      setUser(response.data);
      setIsEditing(false);
      localStorage.setItem('user', JSON.stringify(response.data));
  } catch (error) {
      if (error.response && error.response.status === 409) {
          alert('Email already in use. Please use a different email.');
      } else {
          console.error('Error updating user:', error);
          alert('There was an error updating your profile. Please try again.');
      }
  }
};

  

  const handleCancelClick = () => {
    setEditValues(user);
    setIsEditing(false);
  };

  /*const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
*/
const handleChange = (e) => {
  const { name, value } = e.target;

  setEditValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));

  // Send updated field data to the backend
  axios.put('http://localhost:8080/api/users/update', {
    ...editValues,
    [name]: value,
  })
  .then(response => {
    // Update user state with the latest data from the backend
    setUser(response.data);
    localStorage.setItem('user', JSON.stringify(response.data));
  })
  .catch(error => {
    console.error('Error updating user:', error);
    alert('Failed to update user. Please try again later.');
  });
};



  return (
    <div className="account-page">
      <h2 className='Ac'>Account Settings</h2>
      <div className="profile-section">
        <FaUserCircle className="profile-icon" />
        <h3 className="pro">Profile</h3>
        {isEditing ? (
          <div>
            <label>
              <strong>Name:</strong>
              <input
                type="text"
                name="name"
                value={editValues.name}
                onChange={handleChange}
              />
            </label>
            <label>
              <strong>Email:</strong>
              <input
                type="email"
                name="email"
                value={editValues.email}
                onChange={handleChange}
              />
            </label>
            <div className="button-group">
              <button className="save-button" onClick={handleSaveClick}>Save</button>
              <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* <button className="edit-button" onClick={handleEditClick}>Edit Profile</button> */}
          </div>
        )}
      </div>
      <div className="settings-section">
        <h3>Settings</h3>
        {/* Add additional settings here */}
      </div>
      <div className="logout-section">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
