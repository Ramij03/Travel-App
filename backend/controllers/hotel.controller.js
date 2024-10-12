const Hotel = require("../models/hotel.model");

module.exports = {
    createHotel: async (req, res, next) => {
        const {
            country_id,
            description,
            availability,
            contact,
            imageUrl,
            location,
            title,
            rating,
            review,
            coordinates,
            price,
            facilities
        } = req.body;

        try {
            const newHotel = new Hotel({
                country_id,
                description,
                availability,
                contact,
                imageUrl,
                location,
                rating,
                title,
                review,
                coordinates,
                price,
                facilities
            });

            await newHotel.save();
            res.status(201).json({ status: true, message: "Hotel created successfully" });
        } catch (err) {
            return next(err);
        }
    },

    getHotels: async (req, res, next) => {
        try {
            const hotels = await Hotel.find({});
            res.status(200).json({ hotels });
        } catch (err) {
            return next(err);
        }
    },

    getHotel: async (req, res, next) => {
        const { id } = req.params; // Assuming the hotel ID is passed in the URL parameters

        try {
            const hotel = await Hotel.findById(id);
           /* here to connect the reviews and the user that reviewd to the hotel the user entered
           .populate({
                path:'reviews',
                options:{sort:{updatedAt:-1},limit:2},
                select: 'rating review updatedAt user',
                populate:{
                    path:'User',
                    model:'User',
                    select:'username profile'
                }
            });*/
            if (!hotel) {
                return res.status(404).json({ status: false, message: "Hotel not found" });
            }
            res.status(200).json({ hotel });
        } catch (err) {
            return next(err);
        }
    }
};
