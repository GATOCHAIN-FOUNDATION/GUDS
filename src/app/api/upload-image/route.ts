import { connectMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import User from '@/models/user';
export async function POST(req: any) {
  try {
    console.log('in function');
    const { email, image } = await req.json();
    await connectMongoDB();

    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find the user by email
      {
        profilePicture: image,
      }, // Use $set to update email and country
      { new: true } // Return the updated document
    );
    console.log(updatedUser);
    console.log(email);
    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    console.log(updatedUser);

    return NextResponse.json(
      { message: 'Profile Picture updated successfully.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while updating the user profile.' },
      { status: 500 }
    );
  }
}
