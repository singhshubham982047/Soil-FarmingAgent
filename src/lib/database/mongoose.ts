import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    if (mongoose.connections && mongoose.connections[0].readyState) return;

    const { connection } = await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "soil-farmer-agent",
      bufferCommands: false,
    });
    console.log(`Connected to MongoDB: ${connection.name}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDatabase;
