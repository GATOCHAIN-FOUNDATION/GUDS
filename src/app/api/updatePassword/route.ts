import { connectMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
export async function POST(req: any) {
  try {
    console.log('in function');
    const { token, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);
    // Check if the required fields are provided
    if (!token || !password) {
      return NextResponse.json(
        { message: 'passwordToken and password are required.' },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const updatedUser = await User.findOneAndUpdate(
      { passwordToken: token },
      { password: hashedPassword },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { message: 'User not found with the provided password token.' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Password updated successfully.' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error updating password:', error);

    // Provide detailed error messages for known errors
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { message: 'Validation error occurred.' },
        { status: 400 }
      );
    }

    if (error.name === 'MongoError') {
      return NextResponse.json(
        { message: 'Database error occurred.' },
        { status: 500 }
      );
    }

    // General error handling for other types of errors
    return NextResponse.json(
      { message: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
