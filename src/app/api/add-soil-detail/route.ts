import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/database/mongoose";
import SoilModel from "@/lib/database/model/soil.model";

export const POST = async (request: NextRequest) => {
  try {
    await connectToDatabase();
    const {
      soilType,
      crops,
      characteristics,
      chemicalProperties,
      description,
      locations,
    } = await request.json();

    const newSoil = new SoilModel({
      soilType,
      crops,
      characteristics,
      chemicalProperties,
      description,
      locations,
    });

    await newSoil.save();

    return NextResponse.json(
      { success: true, message: "Soil detail added Successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    );
  }
};
