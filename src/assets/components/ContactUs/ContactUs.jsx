/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', formData);
    //     alert('Thank you for contacting us! We will get back to you soon.');
    //     setFormData({ name: '', email: '', message: '' });
    //     navigate('/services');
    // };


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/contact/submit', formData)
            .then(response => {
                console.log('Form submitted:', response.data);
                alert('Thank you for contacting us! We will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
                navigate('/services');
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
            });
    };








    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Contact Us</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="message" style={styles.label}>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={styles.textarea}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
            <br></br>
            
            
        </div>
       
    );
};

const styles = {
    container: {
        maxWidth: '450px', // Reduced max width
        margin: '0 auto',
        padding: '10px', // Reduced padding
        borderRadius: '8px',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgb(193, 231, 193)',
        // marginTop: '50px', // Reduced margin top
        marginBottom:'40px',
        marginTop:'150px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '15px', // Reduced margin bottom
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(113, 150, 113)',
        padding: '10px', // Reduced padding
        borderRadius: '10px', // Reduced border-radius
    },
    formGroup: {
        marginBottom: '10px', // Reduced margin bottom
    },
    label: {
        marginBottom: '5px',
        fontSize: '14px', // Reduced font size
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '8px', // Reduced padding
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '14px', // Reduced font size
    },
    textarea: {
        width: '100%',
        padding: '8px', // Reduced padding
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '14px', // Reduced font size
        minHeight: '80px', // Reduced minimum height
        resize: 'vertical',
    },
    button: {
        padding: '8px 12px', // Reduced padding
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '14px', // Reduced font size
        cursor: 'pointer',
        alignSelf: 'center', // Centered button
    },
};

export default ContactUs;*/


// // src/ContactUs.js

/*import React, { useState } from 'react';
import './ContactUs.css';


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server or display a success message)
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="contact-us-page">
            <div className="contai">
                <div className="header">
                    <h1>Contact Us</h1>
                    <div className="line"></div>
                </div>
                <div className="conten">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className='con'>
                        <button className='sa' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default ContactUs;
*/



/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Optional, if you need to send form data to a server
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Optionally, send form data to a server
        // axios.post('http://localhost:8080/api/contact/submit', formData)
        //     .then(response => {
        //         console.log('Form submitted:', response.data);
        //         alert('Thank you for contacting us! We will get back to you soon.');
        //         setFormData({ name: '', email: '', message: '' });
        //         navigate('/'); // Navigate to the home page
        //     })
        //     .catch(error => {
        //         console.error('There was an error submitting the form!', error);
        //     });

        // For demonstration, showing the alert directly
        console.log('Form data submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        navigate('/Homepage1'); // Navigate to the home page
    };

    return (
        <div className="contact-us-page">
            <div className="contai">
                <div className="header">
                    <h1>Contact Us</h1>
                    <div className="line"></div>
                </div>
                <div className="conten">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className='con'>
                            <button className='sa' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;*/




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';
import axios from 'axios';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/contact/submit', formData)
            .then(response => {
                console.log('Form submitted:', response.data);
                alert('Thank you for contacting us! We will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
                navigate('/Homepage1');
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
            });
    };
    




    /*const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        navigate('/Homepage1');
    };*/

    return (
        <div className="contact-us-page">
            <div className="contai">
                <div className="contact-image">
                    <img src="https://cdn-ifgjf.nitrocdn.com/DCbROeehyZUHOBQWzjvCJNZTDXGStZHz/assets/mobile/optimized/rev-c2b256b/cdn.filestackcontent.com/9cm7vVXXSeG7zSMNnRXY" alt="Contact Us" />
                </div>
                <div className="contact-form-container">
                    {/* <div className="calco"> */}
                        {/* <h2 className='nivi'>Contact Us</h2> */}
                    <div>
                        <h2 className='nivi'>Contact Us</h2>
                        <div className="line"></div>
                    </div>
                    <div className="conten">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className='button-container'>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        //  </div>
    );
};

export default ContactUs;

