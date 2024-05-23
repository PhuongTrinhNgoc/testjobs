import mongoose,{Schema} from "mongoose"


const jobSchema = new Schema(
    {
        title:String,
        description:String
    },
    {

        timestamps:true
    }
)
const Jobs = mongoose.models.Jobs  || mongoose.model('Jobs',jobSchema)
export default Jobs