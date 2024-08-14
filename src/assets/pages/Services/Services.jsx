// Services.js
/*import React from 'react';
import '../Services/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank, faMoneyBill, faExchange, faBank } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
//import '../Repair/Repair';
import ExpenseCalculator from '../Expense/ExpenseCalculator';
const Services = () => {
    return (
        <div className="services-container">
            <header className="services-header">
              
               
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               <br></br> 
               {<h1 className='heading'>Our Services</h1> }
            </header>
            <section className="services-content">
                <div className="service-card">
                <FontAwesomeIcon icon={faPiggyBank} className="service-icon"/>
                    <h2 className='title'>Budget planning</h2>
                    <p className='para'>"The app provides alerts and notifications to help you stay within your budget,and offers insightful analytics to show where you might be overspending"</p>
                    <Link to='/ExpenseCalculator' className='a'>Go To</Link>
                </div>
                <div className="service-card">
                    <FontAwesomeIcon icon={faMoneyBill} className="service-icon" />
                    <h2 className='title'>Financial Insights</h2>
                    <p className='para'>"Understanding your financial habits is key to improving them, and our expense tracker app's financial insights and reporting service offers deep analysis of your spending behavior."</p>
                    <Link to="/CoinFlip" className='a' >Go To</Link>
                </div>
                <div className="service-card">
                    <FontAwesomeIcon icon={faBank} className="service-icon" />
                    <h2 className='title'>Tracking Management</h2>
                    <p className='para'>"Users can easily log their daily expenses, categorize them, and view detailed reports to understand their spending patterns,and real-time data synchronization across devices,"</p>
                    <Link to='/Analytics' className='a'>Go To</Link>
                    <br></br>
                    <br></br>
                </div>
              <Navbar/>  
            </section>
            
            
            
        </div>
    );
}

export default Services;*/






import React, { useState } from 'react';
import '../Services/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank, faMoneyBill, faBank, faCoins } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Services = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    return (
        <div className="services-container">
            <header className="services-header">
                <br /><br /><br /><br /><br />
                <h1 className="heading">Our Services</h1>
            </header>
            <section className="services-content">
                {[
                    {
                        icon: faPiggyBank,
                        title: "Budget planning",
                        description: "The app provides alerts and notifications to help you stay within your budget, and offers insightful analytics to show where you might be overspending.",
                         link: "/ExpenseCalculator"
                    },
                    {
                        icon: faCoins,
                        title: "Toss a Coin",
                        description: "When you have to make a hard decision, flip a coin.Why? Because when that coin is in the air, you suddenly know what you're hoping for.",
                        link: "/CoinFlip"
                    },
                    {
                        icon: faBank,
                        title: "Tracking Management",
                        description: "Users can easily log their daily expenses, categorize them, and view detailed reports to understand their spending patterns, and real-time data synchronization across devices.",
                        link: "/Analytics"
                    }
                ].map((service, index) => (
                    <div
                        key={index}
                        className={`service-card ${hoverIndex === index ? 'active' : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FontAwesomeIcon icon={service.icon} className="service-icon" />
                        <h2 className="title">{service.title}</h2>
                        <p className={`para ${hoverIndex === index ? 'show' : ''}`}>
                            {service.description}
                        </p>
                        <Link to={service.link} className="a">Go To</Link>
                    </div>
                ))}
            </section>
         
        </div>
    );
};

export default Services;
