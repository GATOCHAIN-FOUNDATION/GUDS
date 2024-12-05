import { connectMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/user';
export async function POST(req: any) {
  try {
    const { email, password, firstName } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName: firstName,
    });
    const new_user = await newUser.save();
    return NextResponse.json(
      { message: 'User registered.', new_user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while registering the user.' },
      { status: 500 }
    );
  }
}
