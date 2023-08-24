import mongoose from "mongoose";

let isConnected=false  // track the connection

export const connectDB=async()=>{
     if(isConnected){
         console.log('mongodb already connected')
         return;
     }else{
        try {
            await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser:true,
                useUnifiedTopology:true
            })
            isConnected=true;
            console.log('mongodb connected')
        } catch (error) {
            console.log(error)
        }
     }
}