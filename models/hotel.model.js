const mongoose= require('mongoose');

const HotelSchema= new mongoose.Schema({
    country_id:{type:String, require:true},
    description:{type:String,required:true},
    title:{type:String,require:true},
    availability:{
        start:{type:Date},
        end:{type:Date}
    },
    contact:{type:String,required:true},
    imageUrl:{type:String, require:true},
    location:{type:String,require:true},
    rating:{type:Number,require:true},
    review:{type:String,require:true},
    coordinates:{
        latitude:{type:Number,require:true},
        longitude:{type:Number,require:true},
    },
    price:{type:Number,require:true},
    /*
    This is to map reviews from users to hotels
    reviews:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Review"
        }
    ],*/ 
    facilities:[
    {
        wifi:{type:Boolean,default:true},
    },
    {
        parking:{type:Boolean,default:true},
    },
    {
        AC:{type:Boolean,default:true},
    },
    {
        service:{type:Boolean,default:true},
    },
    {
        TV:{type:Boolean,default:true},
    },
    {
        BathRoom:{type:Boolean,default:true},
    },
]
    

},{timestamps:false});

module.exports= mongoose.model("Hotel",HotelSchema);