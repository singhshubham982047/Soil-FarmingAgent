import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/database/mongoose";
import SoilModel from "@/lib/database/model/soil.model";

export async function GET() {
  try {
    await connectToDatabase();
    const soils = await SoilModel.find();
    return NextResponse.json({ success: true, soils }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    );
  }
}
