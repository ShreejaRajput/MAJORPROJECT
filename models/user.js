const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");
//here passportlocalmongoose will by default set a username and password for the user.
//It will also add a hash and salt value for each user and the hashed password.


const userSchema=new Schema({
email:{
    type:String,
    required:true,
},
});

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",userSchema);