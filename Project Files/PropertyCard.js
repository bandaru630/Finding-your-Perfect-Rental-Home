import PropTypes from 'prop-types';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.propImages[0]} alt="Property" width="100%" />
      <h3>{property.propType} - {property.propAdType}</h3>
      <p>Address: {property.propAddress}</p>
      <p>Amount: ₹{property.propAmt}</p>
      <p>Contact: {property.ownerContact}</p>
      <p>Available: {property.isAvailable ? 'Yes' : 'No'}</p>
      <p>Additional Info: {property.adInfo}</p>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    propImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    propType: PropTypes.string.isRequired,
    propAdType: PropTypes.string.isRequired,
    propAddress: PropTypes.string.isRequired,
    propAmt: PropTypes.number.isRequired,
    ownerContact: PropTypes.string.isRequired,
    isAvailable: PropTypes.bool.isRequired,
    adInfo: PropTypes.string
  }).isRequired
};
