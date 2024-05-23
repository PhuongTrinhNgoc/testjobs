import connectMongoDB from "@/conect/mongodb"
import { NextResponse } from "next/server";
import Jobs from "@/models/jobs";

export async function PUT(request,{params}){
    const {id} = params;
    const {newTitle:title,newDescription:description} = request.json()
    await connectMongoDB()
    await Jobs.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({message:`update complate ${id}`},{status:200})
}