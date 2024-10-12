const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const errorHandler = require("./middleware/errorHandler"); 

const authRouter = require("./routes/auth");  
const userRouter = require("./routes/user");  
const countryRouter = require("./routes/country"); 
const placeRouter = require("./routes/place"); 
const hotelRouter = require("./routes/hotel"); 
const reviewRouter = require("./routes/review"); 

const app = express();

dotenv.config();
mongoose.connect(process.env.DB)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT || 4000, () => 
    console.log(`Travel app listening on port ${process.env.PORT || 4000}!`));

app.use('/api/auth', authRouter);  
app.use('/api/user', userRouter);  
app.use('/api/country', countryRouter);  
app.use('/api/place', placeRouter);  
app.use('/api/hotel', hotelRouter); 
app.use('/api/review', reviewRouter); 
app.use(errorHandler);  // Error handler placed last


