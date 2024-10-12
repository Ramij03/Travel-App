const mongoose=require('mongoose');

const ReviewSchema= mongoose.Schema({
    place:{type:String,require:true},
    review:{type:String,require:true},
    rating:{type:Number,require:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

}, {timestamps:true});