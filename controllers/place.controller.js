const Place= require("../models/place.model");

module.exports={
    createPlace: async (req,res,next)=>{
        const {country_id,description,imageUrl,location,title,rating,review,latitude,longitude,popular}=req.body;
        try{
            const newPlace= new Place ({
                country_id,
                description,
                imageUrl,
                location,
                title,
                rating,
                review,
                latitude,
                longitude,
                popular
            });
            await newPlace.save();
            res.status(201).json({status:true});
        }
        catch(err){
            return next(err);
        }
    },
    getPlaces: async (req, res, next) => {
        try {
            const places = await Place.find({}, '_id review rating imageUrl title country_id location');
            res.status(200).json({ data: places }); 
        } catch (err) {
            return next(err);
        }
    },
    getPlace: async (req,res,next)=>{
        place_id= req.params.id;
        try{
            const place= await Place.findById(place_id,{createdAt:0, updatedAt:0, __v:0})
            .populate({
                path:'popular',
                select:"title rating review imageUrl location title"
            })
            res.status(200).json({place});
        }
        catch(err){
            return next(err);
        }
    },
    getPlacebyCountry: async(req,res,next)=>{
        const countryId=req.params.id;
        try{
            const places=await Place.find({country_id:countryId},{createdAt:0, updatedAt:0, __v:0})
            if(places.length===0){
                return res.status(200).json([])
            }
            res.status(200).json({places})
        }
        catch(err){
            return next(err);
        }
    },
    search:async(req,res,next)=>{
        const results= await Place.aggregate(
            
        )
    }
}