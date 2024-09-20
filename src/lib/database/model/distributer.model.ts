import mongoose, { Schema } from "mongoose";

const DistributerSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    areaOfDistribution: { type: String, required: true },
  },
  { timestamps: true }
);

const DistributerModel =
  mongoose.models?.Distributer ||
  mongoose.model("Distributer", DistributerSchema);

export default DistributerModel;
