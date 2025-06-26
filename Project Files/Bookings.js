import React, { useEffect, useState } from 'react';
import axios from 'axios';
   
const Bookings = ({ userId }) => {
     const [bookings, setBookings] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
   
     useEffect(() => {
       const fetchBookings = async () => {
         try {
           const res = await axios.get(`/api/bookings/user/${userId}`);
           setBookings(res.data);
         } catch (err) {
           setError('Failed to fetch bookings');
         } finally {
           setLoading(false);
         }
       };
       fetchBookings();
     }, [userId]);
   
     if (loading) return <p>Loading...</p>;│     if (error) return <p>{error}</p>;
   

     return (
       <div>
         <h2>My Bookings</h2>
         <ul>
           {bookings.map((booking) => (
             <li key={booking._id}>
               Property ID: {booking.propertyId?.propAddress || booking.propertyId} <br />
               Owner ID: {booking.ownerId} <br />
               Name: {booking.userName}             </li>
           ))}
         </ul>
       </div>
     );
   };
export default Bookings;