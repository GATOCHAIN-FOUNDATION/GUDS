import { connectMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import User from '@/models/user';

export async function POST(req: any) {
  try {
    const { imageUrl, email } = await req.json();
    await connectMongoDB();
    console.log('Mongo DB connected');

    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find the user by email
      {
        profilePicture: imageUrl,
      }, // Use $set to update email and country
      { new: true } // Return the updated document
    );
    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Profile Picture updated successfully.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while registering the user.' },
      { status: 500 }
    );
  }
}
