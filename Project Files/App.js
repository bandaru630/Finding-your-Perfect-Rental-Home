   import React from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import Navbar from './components/Navbar';
   import Home from './pages/Home';
   import AddProperty from './pages/AddProperty';
   import Bookings from './pages/Bookings';
   const App = () => {
    const userId = '12345'; // replace with dynamic user auth logic as needed
    return (
       <Router>
        <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/add-property" element={<AddProperty />} />
           <Route path="/bookings" element={<Bookings userId={userId} />} />
         </Routes>
       </Router>
     );
   };
   
   export default App;