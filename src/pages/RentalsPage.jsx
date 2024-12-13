import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRentals, selectRentals } from "../features/rentalSlice";
import RentalCard from "../components/RentalCard.jsx";

const RentalsPage = () => {
  const dispatch = useDispatch();
  const rentals = useSelector(selectRentals);
  const loading = useSelector((state) => state.rentals.loading);
  const error = useSelector((state) => state.rentals.error);

  useEffect(() => {
    dispatch(fetchRentals());
  }, [dispatch]);

  if (loading) return <p>Loading rentals...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!Array.isArray(rentals) || rentals.length === 0)
    return <p>No rentals available</p>;

  return (
    <div>
      <h1>Car Rentals</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {rentals.map((rental) => (
          <RentalCard key={rental._id} rental={rental} />
        ))}
      </div>
    </div>
  );
};

export default RentalsPage;
