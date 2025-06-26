import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ propertyId, userId, ownerId, onSuccess }) => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post('/api/bookings', {
        propertyId,
        userId,
        ownerId,
        userName
      });
      onSuccess(res.data);
    } catch (err) {
      const message = err.response?.data?.message || 'Booking failed.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Booking...' : 'Book Now'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default BookingForm;
