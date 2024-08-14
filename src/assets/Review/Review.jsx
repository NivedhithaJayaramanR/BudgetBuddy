import React, { useState, useEffect } from 'react';
import './Review.css'; // Ensure this CSS file is imported


const reviews = [
  {
    
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWibt1ZQqls1x5ufIYNqJOkswCYXhNEJEPNqWtewOyDqgJP8FSWBGBIeNiTEl056OCPxg&usqp=CAU', // Replace with actual customer images
    name: 'Jane Doe',
    review: 'Great product, I am very satisfied!',
    rating: 4, // Rating out of 5
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh_cIWtLDtNfNCD4LG7qYsIBOKwXiccW0qA&s',
    name: 'John Smith',
    review: 'Fantastic quality, will definitely buy again.',
    rating: 5, // Rating out of 5
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBpU_ARrDdB7Sc-tghhWITGKb5mU1vT-TCceuH2LAQgDSmJuTtFPa5I_tZU9OIrVUFCw&usqp=CAU',
    name: 'John Smith',
    review: 'Fantastic quality, will definitely buy again.',
    rating: 5, // Rating out of 5
  },
  {
    image: 'https://www.shutterstock.com/image-photo/young-woman-wears-casual-clothes-260nw-2347254681.jpg',
    name: 'John Smith',
    review: 'Fantastic quality, will definitely buy again.',
    rating: 5, // Rating out of 5
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRXbd3oUK2CFRSfKx9s729llbrYWBaRfyhOmsg-ScdmjJrMSQCv3HoObqt0vuOIIRrp0&usqp=CAU',
    name: 'John Smith',
    review: 'Fantastic quality, will definitely buy again.',
    rating: 5, // Rating out of 5
  },
  // Add more reviews as needed
];

const StarRating = ({ rating }) => {
  return (

    <div className="star-rating">
      
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </div>

  );
};

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next review
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to go to the previous review
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  // Set up the auto-slide interval
  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Change review every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    
    <div className='head-title'>
  
     <div className='Ti'>Reviews</div>
   
    <div className="carousel-wrapper">
     
      <div className="carousel-container">
        {/* <div className="carousel" style={{ transform: translateX(-${currentIndex * 100}%) }}> */}
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

          {reviews.map((review, index) => (
            <div className="carousel-item" key={index}>
              <img src={review.image} alt={review.name} className="customer-image" />
              <div className="review-content">
                <h4>{review.name}</h4>
                <StarRating rating={review.rating} />
                <p>{review.review}</p>
              </div>
             
            </div>

           
          ))}
        </div>
        </div>
      {/* <button className="carousel-button prev" onClick={goToPrev}>
          &lt;
        </button>
        <button className="carousel-button next" onClick={goToNext}>
          &gt;
        </button> */}
      </div>
      
     
    </div>
  
  );
};

export default Review;