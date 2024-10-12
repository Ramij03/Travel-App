const Review = require("../models/review.model");
const Hotel= require("../models/hotel.model");
module.exports={
    addReview: async (req, res, next) => {
        const userId = req.user.id; // Correctly accessing user ID from req.user
        const { place, review, rating } = req.body;
        try {
            // User can only put one review for each place
            const existingReview = await Review.findOne({ place, user: userId });
            if (existingReview) {
                existingReview.rating = rating;
                existingReview.review = review;

                await existingReview.save();
            } else {
                const newReview = new Review({
                    place,
                    rating,
                    review,
                    user: userId // Ensure you're saving the user ID here
                });
                await newReview.save();
                const hotel = await Hotel.findById(place);
                hotel.reviews.push(newReview._id);

                await hotel.save();
            }
            res.status(200).json({ status: true });
        } catch (err) {
            return next(err);
        }
    },

    getReviews: async(req,res,next)=>{
        const placeId= req.params.id;
        try{
            const places=await Review.find({place: placeId},{__v:0,createdAt:0})
            .populate({
                path:'user',
                select:'username profile'
            });

            res.status(200).json(places);
        }   
        catch(err){
            return next(err);
        }
    },
    getReview: async(req,res,next)=>{

    }
};