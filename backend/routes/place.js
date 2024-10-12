const router = require("express").Router();
const placeController = require("../controllers/place.controller");

// Define the routes
router.post('/', placeController.createPlace);
router.get('/get-place/:id', placeController.getPlace);
router.get('/get-places', placeController.getPlaces);
router.get('/get-place-country/:id', placeController.getPlacebyCountry);
// Export the router
module.exports = router;