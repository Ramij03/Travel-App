const Country = require("../models/country.model");

module.exports = {
    // Add a new country
    addCountry: async (req, res, next) => {
        const { country, description, imageUrl, region, popular } = req.body;
        try {
            // Create a new instance of the Country model
            const newCountry = new Country({
                country,
                description,
                imageUrl,
                region,
                popular
            });
            
            // Save the new country document to the database
            await newCountry.save();

            res.status(201).json({
                status: true,
                message: "Country added successfully",
                data: newCountry
            });
        } catch (err) {
            console.log(err);
            return next(err); // Pass the error to the error-handling middleware
        }
    },

    // Add places to a specific country
    addPlacestoCountry: async (req, res, next) => {
        const { countryId, places } = req.body; // Assumes places is an array of place objects
        try {
            
            const country = await Country.findById(countryId);
            if (!country) {
                return res.status(404).json({
                    status: false,
                    message: "Country not found"
                });
            }
            const index=country.popular.indexOf(placeId);
            if (index!=-1){
                country.popular.splice(index,1);
            }
            else{
                country.places.push(placeId);
            }
            await country.save();
            res.status(200).json({
                status: true,
                message: "Places added to the country",
                data: country
            });
        } catch (err) {
            console.log(err);
            return next(err); // Pass the error to the error-handling middleware
        }
    },

    // Get all countries
    getCountries: async (req, res, next) => {
        try {
            const countries = await Country.find({},{country:1, _id:1, imageUrl:1});
            res.status(200).json({
                status: true,
                data: countries
            });
        } catch (err) {
            console.log(err);
            return next(err);
        }
    },

    // Get a single country by ID
    getCountry: async (req, res, next) => {
        const { id } = req.params; // Get the id from the route parameter
        try {
            const country = await Country.findById(id)
            .populate({
                path:'popular',
                select:'title rating review imageUrl location'
            });
            if (!country) {
                return res.status(404).json({
                    status: false,
                    message: "Country not found"
                });
            }
    
            res.status(200).json({
                status: true,
                data: country
            });
        } catch (err) {
            console.log(err);
            return next(err);
        }
    }
};
