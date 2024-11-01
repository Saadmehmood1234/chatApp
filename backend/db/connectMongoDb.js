import mongoose from "mongoose";
const connectToMongoDb= async ()=>{
    try{
     await mongoose.connect(process.env.MONGO_URI);
     console.log("connected to databse");
    }
    catch(error){
      console.log("Error connecting to mongodb",error.message);
    }
}
export default connectToMongoDb;