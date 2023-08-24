import mongoose from "mongoose";

const userSchema=mongoose.Schema({
     username:{
        type:String,
        required:[true,'username is required'],
        match:[/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
     },
     email:{
        type:String,
        unique:[true,'Email already exist'],
        required:[true,'Please add the email']
     },
     image:{
        type:String,
     }
})

const User=mongoose.models.User || mongoose.model('User',userSchema)

export default User