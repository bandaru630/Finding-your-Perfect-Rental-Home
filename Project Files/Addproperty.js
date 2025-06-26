import React, { useState } from 'react';
import axios from 'axios';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    userID: '',
    propType: '',
    propAdType: '',
    isAvailable: true,
    propAddress: '',
    ownerContact: '',
    propAmt: '',
    propImages: [],
    adInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/properties', formData);
      alert('Property added successfully');
      // Optionally reset the form after successful submission
      setFormData({
        userID: '',
        propType: '',
        propAdType: '',
        isAvailable: true,
        propAddress: '',
        ownerContact: '',
        propAmt: '',
        propImages: [],
        adInfo: ''
      });
    } catch (err) {
      console.error("Error adding property:", err.response ? err.response.data : err.message);
      alert('Failed to add property. Check console for details.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Property</h2>
      <input type="text" name="userID" placeholder="User ID (Owner)" value={formData.userID} onChange={handleChange} required />
      <input type="text" name="propType" placeholder="Property Type (e.g., Apartment, House)" value={formData.propType} onChange={handleChange} required />
      <input type="text" name="propAdType" placeholder="Ad Type (e.g., Rent, Sale)" value={formData.propAdType} onChange={handleChange} required />
      <input type="text" name="propAddress" placeholder="Address" value={formData.propAddress} onChange={handleChange} required />
      <input type="text" name="ownerContact" placeholder="Owner Contact (e.g., Phone, Email)" value={formData.ownerContact} onChange={handleChange} required />
      <input type="number" name="propAmt" placeholder="Amount (e.g., 15000)" value={formData.propAmt} onChange={handleChange} required />
      <input
        type="text"
        name="propImages"
        placeholder="Image URLs (comma separated)"
        value={formData.propImages.join(',')} // Display current array as comma-separated string
        onChange={(e) => setFormData({ ...formData, propImages: e.target.value.split(',').map(img => img.trim()).filter(img => img !== '') })}
      />
      <textarea name="adInfo" placeholder="Additional Info / Description" value={formData.adInfo} onChange={handleChange}></textarea>
      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddProperty;