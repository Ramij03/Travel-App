const router = require("express").Router();
const countryController = require("../controllers/country.controller");

// Define the routes
router.post('/', countryController.addCountry);
router.get('/get-country/:id', countryController.getCountry);
router.get('/get-countries', countryController.getCountries);
router.post('/add-place-country', countryController.addPlacestoCountry);
// Export the router
module.exports = router;