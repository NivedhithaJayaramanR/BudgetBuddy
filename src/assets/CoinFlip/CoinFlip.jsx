/*import React, { useState } from 'react';
import headImage from './head.png'; // Adjust the path if necessary
import tailImage from './tail.png'; // Adjust the path if necessary
import '../CoinFlip/CoinFlip.css'; // Optional: Create a CSS file for styling
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const CoinFlip = () => {
  const [result, setResult] = useState(null);

  const flipCoin = () => {
    const outcomes = ['heads', 'tails'];
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    setResult(randomOutcome);
  };

  return (
 
    <div className="coin-flip-container">
       <br></br>
        <br></br>
        <br></br>
      <h1 className='h1-coin'>Coin Flip</h1>
      <br></br>
      <br></br>
      <button className='coin-button'onClick={flipCoin}>Flip Coin</button>
      <br></br>
      <br></br>
      {result && (
        <div className="result-container">
          <h2 className='h2-coin'>{result === 'heads' ? 'Head' : 'Tail'}</h2>
          <img
            src={result === 'heads' ? headImage : tailImage}
            alt={result}
            className="coin-image"
          />
         <br></br>
         <br></br>
        </div>
       
      )}
    </div>
    
  );
};

export default CoinFlip;*/


/*import React, { useState } from 'react';
import headImage from './head.png'; // Adjust the path if necessary
import tailImage from './tail.png'; // Adjust the path if necessary
import '../CoinFlip/CoinFlip.css'; // Optional: Create a CSS file for styling
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const CoinFlip = () => {
  const [result, setResult] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const outcomes = ['heads', 'tails'];
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
      setResult(randomOutcome);
      setIsFlipping(false);
    }, 1000); // Duration of the flip animation
  };

  return (
    <div className="coin-flip-page">
      <Navbar />


      
      <div className="coin-flip-container">
        <h1 className="h1-coin">Coin Flip</h1>
        <button className="coin-button" onClick={flipCoin} disabled={isFlipping}>
          {isFlipping ? 'Flipping...' : 'Flip Coin'}
        </button>
        {result && (
          <div className={`result-container ${isFlipping ? 'flipping' : ''}`}>
            <h2 className="h2-coin">{result === 'heads' ? 'Head' : 'Tail'}</h2>
            <img
              src={result === 'heads' ? headImage : tailImage}
              alt={result}
              className="coin-image"
            />
          </div>
        )}
      </div>
      
    </div>
  );
};

export default CoinFlip;*/


import React, { useState } from 'react';
import headImage from './head.png'; // Adjust the path if necessary
import tailImage from './tail.png'; // Adjust the path if necessary
import '../CoinFlip/CoinFlip.css'; // Optional: Create a CSS file for styling
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const CoinFlip = () => {
  const [result, setResult] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const outcomes = ['heads', 'tails'];
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
      setResult(randomOutcome);
      setIsFlipping(false);
    }, 1000); // Duration of the flip animation
  };

  return (
    <div className="coin-flip-page">
      <Navbar />
      <video autoPlay muted loop id="background-video">
        <source src="src\assets\CoinFlip\Screen Recordings\Screen Recording 2024-07-29 152017.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="coin-flip-container">
        <h1 className="h1-coin">Coin Flip</h1>
        <button className="coin-button" onClick={flipCoin} disabled={isFlipping}>
          {isFlipping ? 'Flipping...' : 'Flip Coin'}
        </button>
        {result && (
          <div className={`result-container ${isFlipping ? 'flipping' : ''}`}>
            <h2 className="h2-coin">{result === 'heads' ? 'Head' : 'Tail'}</h2>
            <img
              src={result === 'heads' ? headImage : tailImage}
              alt={result}
              className="coin-image"
            />
          </div>
        )}
      </div>
     
    </div>
  );
};

export default CoinFlip;

