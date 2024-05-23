import mongoose from "mongoose";

const connectMongoDB = async ()=>{
    try {
      await  mongoose.connect(process.env.MONGOO_URI)
        console.log('connect');
    } catch (error) {
     console.log(error);   
    }
}

export default connectMongoDB;