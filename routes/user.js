const router = require("express").Router();
const userController = require("../controllers/user.controller");
const authenticateToken = require("../middleware/jwt_token"); // Assuming this middleware verifies JWT

// Define the routes, no need to pass :id, the middleware will populate req.user
router.delete('/delete-user', authenticateToken, userController.deleteUser);
router.get('/get-user', authenticateToken, userController.getUser);

// Export the router
module.exports = router;
