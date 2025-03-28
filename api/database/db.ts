import mongoose from "mongoose";

async function connectDB() {
  try {
    const URL =
      process.env.NODE_ENV === "prod"
        ? process.env.MONGO_URI_PROD || ""
        : process.env.MONGO_URI_LOCAL || "mongodb://127.0.0.1:27017/mongoose-example";

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