import { connectMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import User from '@/models/user';
export async function POST(req: any) {
  try {
    await connectMongoDB();
    const { userEmail } = await req.json();
    const user = await User.findOne({ email: userEmail });
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while getting the user.' },
      { status: 500 }
    );
  }
}
