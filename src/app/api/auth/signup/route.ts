import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/lib/database/model/user.model";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/lib/database/mongoose";

export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    const user = await UserModel.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({ name, email, password: hashedPassword });
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
