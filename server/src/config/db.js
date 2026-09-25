import mongoose from 'mongoose';

// Cache MongoDB connection globally
// This helps reuse the connection across warm Vercel serverless functions.
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectDB = async () => {
  // Get MongoDB connection string from Vercel Environment Variables
  const mongoUri = process.env.MONGODB_URI;

  // Fail immediately if the environment variable is missing
  if (!mongoUri) {
    throw new Error(
      'MONGODB_URI environment variable is not configured'
    );
  }

  // Reuse existing connection
  if (
    cached.conn &&
    mongoose.connection.readyState === 1
  ) {
    return cached.conn;
  }

  // Create connection promise only once
  if (!cached.promise) {
    const options = {
      autoIndex: process.env.NODE_ENV !== 'production',
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose
      .connect(mongoUri, options)
      .then((mongooseInstance) => {
        console.log(
          `✅ MongoDB Connected: ${mongooseInstance.connection.host}/${mongooseInstance.connection.name}`
        );

        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    // Reset promise so the next request can retry the connection
    cached.promise = null;

    console.error(
      `❌ MongoDB Connection Error: ${error.message}`
    );

    throw error;
  }

  return cached.conn;
};