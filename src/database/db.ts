import mongoose from "mongoose";

async function connectDB() {
  try {
    const URL =
      process.env.NODE_ENV === "local"
        ? process.env.MONGO_URI_LOCAL || "mongodb://127.0.0.1:27017/mongoose-example"
        : process.env.MONGO_URI_PROD || "";

    if (!URL) {
      throw new Error("MongoDB connection URL is not defined.");
    }

    await mongoose.connect(URL, {});
    console.log(`Connected to the database: ${URL}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error while connecting to DB: ${error.message}`);
    } else {
      console.error("Unknown error occurred while connecting to the database.");
    }
    process.exit(1);
  }
}

export default connectDB;