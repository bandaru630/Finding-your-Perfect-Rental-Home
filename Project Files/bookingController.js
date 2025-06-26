const Booking = require('../models/Booking');
│   │       
│   │       exports.createBooking = async (req, res) => {
│   │         try {
│   │           const booking = new Booking(req.body);
│   │           await booking.save();
│   │           res.status(201).json(booking);
│   │         } catch (error) {
│   │           res.status(500).json({ error: 'Booking creation failed' });
│   │         }
│   │       };
│   │       
│   │       exports.getBookingsByUser = async (req, res) => {
│   │         try {
│   │           const bookings = await Booking.find({ userId: req.params.userId }).populate('propertyId');
│   │           res.status(200).json(bookings);
│   │         } catch (error) {
│   │           res.status(500).json({ error: 'Error fetching bookings' });
│   │         }
│   │       };