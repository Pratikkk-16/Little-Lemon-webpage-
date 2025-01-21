import React, { useState } from 'react';

function Reservation() {
  const [formData, setFormData] = useState({
    people: '',
    date: '',
    time: '',
    tableNumber: null,
    isBooked: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assign a random table number (1-5)
    const tableNumber = Math.floor(Math.random() * 5) + 1;
    setFormData({ ...formData, isBooked: true, tableNumber });
  };

  return (
    <section id="reservation" className="reservation">
      <h2>Book a Table</h2>
      {formData.isBooked ? (
        <p className='confirmation'>
          Table booked successfully! Your table number is <strong>{formData.tableNumber}</strong>.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="reservation-form">
          <label>
            Number of People:
            <input
              type="number"
              name="people"
              value={formData.people}
              onChange={handleInputChange}
              required
              min="1"
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Book Table</button>
        </form>
      )}
    </section>
  );
}

export default Reservation;
