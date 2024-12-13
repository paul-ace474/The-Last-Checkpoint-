import React from 'react';
import PropTypes from 'prop-types';

const RentalCard = ({ rental }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '300px' }}>
      <img
        src={rental.car.image}
        alt={rental.car.title}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h2>{rental.car.title}</h2>
      <p><strong>Price:</strong> ${rental.pricePerDay}/day</p>
      <p><strong>Location:</strong> {rental.location}</p>
      <button style={{ marginTop: '10px' }}>Rent Now</button>
    </div>
  );
};

RentalCard.propTypes = {
  rental: PropTypes.shape({
    car: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
    pricePerDay: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default RentalCard;
