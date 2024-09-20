import mongoose, { Schema } from "mongoose";

const SoilSchema: Schema = new Schema(
  {
    soilType: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    crops: {
      type: String,
      required: true,
    },
    characteristics: {
      type: String,
      required: true,
    },
    chemicalProperties: {
      type: String,
    },
    locations: {
      type: String,
    },
  },
  { timestamps: true }
);

const SoilModel = mongoose.models?.Soil || mongoose.model("Soil", SoilSchema);
export default SoilModel;
