import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCarById, purchaseCar } from '../services/carService';

const CheckoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const loadCar = async () => {
      const data = await getCarById(id);
      setCar(data);
    };
    loadCar();
  }, [id]);

  const handleConfirmPurchase = async () => {
    try {
      const response = await purchaseCar(id);
      alert('Purchase successful!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Purchase failed. Please try again later.');
    }
  };

  if (!car) {
    return <p>Loading checkout details...</p>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <p>Car: {car.title}</p>
      <p>Price: ${car.price}</p>
      <p>Location: {car.location}</p>
      <button onClick={handleConfirmPurchase}>Confirm Purchase</button>
    </div>
  );
};

export default CheckoutPage;
