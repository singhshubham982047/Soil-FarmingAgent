import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/database/mongoose";
import DistributerModel from "@/lib/database/model/distributer.model";

export async function GET() {
  try {
    await connectToDatabase();
    const distributers = await DistributerModel.find();

    if (!distributers)
      return NextResponse.json(
        { success: false, message: "No Distributer Found" },
        { status: 404 }
      );

    return NextResponse.json({ success: true, distributers }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    );
  }
}
