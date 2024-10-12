const router = require("express").Router();
const reviewController = require("../controllers/review.controller");
const authenticateToken = require('../middleware/jwt_token');
// Define the routes
router.post('/', authenticateToken,reviewController.addReview );  
router.get('/get-reviews/:id', reviewController.getReviews);      
router.get('/get-review/:id', reviewController.getReview); 

// Export the router
module.exports = router;
