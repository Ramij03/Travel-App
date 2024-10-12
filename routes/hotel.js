const router = require("express").Router();
const hotelController = require("../controllers/hotel.controller");

// Define the routes
router.post('/', hotelController.createHotel);  // Route to create a new hotel
router.get('/get-hotels', hotelController.getHotels);      // Route to get all hotels
router.get('/get-hotel/:id', hotelController.getHotel); 
// Export the router
module.exports = router;
