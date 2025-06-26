import React, { useEffect, useState } from 'react';
 import axios from 'axios';
   import PropertyCard from '../components/PropertyCard';
   
   const Home = () => {
     const [properties, setProperties] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
   
     useEffect(() => {
       const fetchProperties = async () => {
         try {

           const res = await axios.get('/api/properties');
           setProperties(res.data);
         } catch (err) {
           setError('Failed to load properties');
         } finally {
           setLoading(false);
         }
       };
       fetchProperties();
     }, []);
   
     if (loading) return <p>Loading...</p>;
     if (error) return <p>{error}</p>;
   
     return (
       <div>
         <h2>Available Properties</h2>
         {properties.map(property => (

          <PropertyCard key={property._id} property={property} />
         ))}
       </div>
     );
   };
   
   export default Home;