
import connectMongoDB from "@/conect/mongodb"
import { NextResponse } from "next/server";
import Jobs from "@/models/jobs";
export async function POST(request){
    const {title,description} = await request.json()
    await connectMongoDB();
    await Jobs.create({title,description})
    return NextResponse.json({message:"job created",status:201})
}
export async function GET(){
    await connectMongoDB();
    const jobs = await Jobs.find()
     const len = await Jobs.find().length;
    return NextResponse.json({jobs,len} )
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
   await Jobs.findByIdAndDelete(id)
   console.log(id);
    return NextResponse.json({messenger:'deleted'},{status:200} )
}