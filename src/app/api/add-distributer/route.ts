import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/database/mongoose";
import DistributerModel from "@/lib/database/model/distributer.model";

export const POST = async (request: NextRequest) => {
  await connectToDatabase();

  try {
    const { name, email, phone, address, areaOfDistribution } =
      await request.json();

    const distributer = await DistributerModel.findOne({ email });

    if (distributer) {
      return NextResponse.json(
        { success: false, message: "Distributer already exists" },
        { status: 400 }
      );
    }

    const newDistributer = new DistributerModel({
      name,
      email,
      phone,
      address,
      areaOfDistribution,
    });
    await newDistributer.save();
    return NextResponse.json(
      { success: true, message: "Distributer detail added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    );
  }
};
