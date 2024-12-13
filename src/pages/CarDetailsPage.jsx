import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCarById } from '../services/carService';
import MainLayout from '../layouts/MainLayout';

const CarDetailsPage = () => {
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

  if (!car) {
    return <p>Loading car details...</p>;
  }

  const handleBuyNow = () => {
    navigate(`/checkout/${car.id}`);
  };

  return (
    <MainLayout>
        <div>
      <h1>{car.title}</h1>
      <img src={car.imageUrl} alt={car.title} style={{ width: '100%', height: 'auto' }} />
      <p>Price: ${car.price}</p>
      <p>{car.description}</p>
      <p>Location: {car.location}</p>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
    </MainLayout>
  );
};

export default CarDetailsPage;
