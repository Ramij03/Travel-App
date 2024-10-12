const router = require("express").Router();
const authController = require("../controllers/auth.controller");

// Define the routes
router.post('/register', authController.createUser);
router.post('/login', authController.loginUser);

// Export the router
module.exports = router;
