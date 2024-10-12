const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    profile:{
        type:String,
        default:'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
    },

})

module.exports =mongoose.model("User",UserSchema);