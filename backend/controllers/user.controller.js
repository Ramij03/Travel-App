const User = require("../models/user.model");

module.exports = {
    // Delete User
    deleteUser: async (req, res, next) => {
        try {
            // Assuming req.user is populated by authentication middleware
            await User.findByIdAndDelete(req.user.id);

            res.status(200).json({
                status: true,
                message: "User deleted successfully"
            });
        } catch (err) {
            console.log(err);
            return next(err);
        }
    },

    // Get User
    getUser: async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id).select('-password -__v -createdAt -updatedAt');
            
            if (!user) {
                return res.status(401).json({
                    status: false,
                    message: "User does not exist"
                });
            }

            res.status(200).json({
                status: true,
                data: user
            });
        } catch (err) {
            console.log(err);
            return next(err);
        }
    }
};
