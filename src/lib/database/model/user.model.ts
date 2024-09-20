import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name required"],
    },

    email: {
      type: String,
      required: [true, "email required"],
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "please enter a valid email address",
      ],
    },
    password: {
      type: String,
      select: false,
    },
    googleId: { type: String },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.models?.User || mongoose.model("User", UserSchema);

export default UserModel;
