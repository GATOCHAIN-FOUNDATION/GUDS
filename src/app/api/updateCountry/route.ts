import { connectMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import User from '@/models/user';

export async function POST(req: any) {
  try {
    const { country, email } = await req.json();
    await connectMongoDB();

    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find the user by email
      {
        country: country,
      }, // Use $set to update email and country
      { new: true } // Return the updated document
    );
    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }
    return NextResponse.json(
      { message: 'Country updated successfully.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while updating the user country.' },
      { status: 500 }
    );
  }
}
