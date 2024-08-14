// import React from 'react';
// import './TipsPage.css';
// import Navbar from '../components/Navbar/Navbar';

// const TipsPage = () => {
//   return (
//     <section>
//       <Navbar />
//       <div className="tips-container">
//         <h2>Money-Saving Tips</h2>
//         <ul className="tips-list">
//           <li>
//             <h3>Track Your Expenses Regularly</h3>
//             <p>Consistently tracking your expenses helps you identify where your money is going and spot any unnecessary spending.</p>
//           </li>
//           <li>
//             <h3>Set Budget Limits</h3>
//             <p>Establish budget limits for different categories like groceries, dining out, and entertainment. Stick to these limits to avoid overspending.</p>
//           </li>
//           <li>
//             <h3>Use Coupons and Discounts</h3>
//             <p>Take advantage of coupons, discounts, and special offers to save money on everyday purchases.</p>
//           </li>
//           <li>
//             <h3>Automate Savings</h3>
//             <p>Set up automatic transfers to your savings account to ensure that you save a portion of your income regularly.</p>
//           </li>
//           <li>
//             <h3>Avoid Impulse Purchases</h3>
//             <p>Before making a purchase, ask yourself if it's something you really need or if it's an impulsive decision.</p>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default TipsPage;



// // src/pages/TipsPage/TipsPage.jsx
import React, { useState, useEffect } from 'react';
import './TipsPage.css';
import Navbar from '../components/Navbar/Navbar';
import image2 from './image2.jpeg';
import image10 from './image10.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.jpeg';
import image8 from './image8.png';
import image9 from './image9.webp';
const TipsPage = () => {
  const tips = [
    {
      id: 1,
      title: 'Set a Budget',
      description: 'Always set a budget for each category to avoid overspending.',
      image: image10,
    },
    {
      id: 2,
      title: 'Track Daily Expenses',
      description: 'Make it a habit to record your expenses daily to stay on track.',
      image: image5,
    },
    {
      id: 3,
      title: 'Use Categories Wisely',
      description: 'Organize your expenses by categories to better understand where your money goes.',
      image: image6,
    },
    {
      id: 4,
      title: 'Review Regularly',
      description: 'Regularly review your spending patterns and adjust your budget as needed.',
      image: image8,
    },
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [tips.length]);

  return (
    <section>
      <Navbar />
      <h2 className='mala'>Here are Some Tips</h2>
      <div className="tips-container">
        <div className="slider">
          <ul className="tips-list" style={{ transform: `translateX(-${currentTipIndex * 100}%)` }}>
            {tips.map(tip => (
              <li key={tip.id} className="tip-item">
                <img src={tip.image} alt={tip.title} className="tip-image" />
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TipsPage;
