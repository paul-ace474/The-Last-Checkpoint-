import React, { useEffect, useState } from 'react';
import { getCarById } from '../services/carService';
import CarCard from '../components/CarCard';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      const data = await getCarById();
      setCars(data);
    };
    loadCars();
  }, []);

  return (
    <MainLayout>
        <div>
      <h1>Available Cars</h1>
      <div>
        {/* {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))} */}
      </div>
    </div>
    </MainLayout>
  );
};

export default HomePage;
