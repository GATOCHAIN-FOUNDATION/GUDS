import mongoose from 'mongoose';
const MONGO_URI = process.env.MONGO_URI as string;
export const connectMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error);
  }
};
