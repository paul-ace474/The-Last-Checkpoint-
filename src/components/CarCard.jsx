import React from 'react';

const CarCard = ({ car }) => (
  <div className={styles.card}>
    <img src={car.imageUrl} alt={car.title} />
    <h2>{car.title}</h2>
    <p>Price: ${car.price}</p>
    <p>{car.location}</p>
  </div>
);

export default CarCard;
