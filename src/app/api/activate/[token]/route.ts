import { NextResponse, NextRequest } from 'next/server';
import ActivateToken from '@/models/activatetoken';
import User from '@/models/user';
import { connectMongoDB } from '@/lib/mongodb';
export async function GET(
  res: NextRequest,
  { params }: { params: { token: string } }
) {
  const { token } = params;
  try {
    await connectMongoDB();
    const res = await ActivateToken.findOne({ token }).select('userId');
    // Update the user and activateToken
    const user = await User.findById(res?.userId);
    if (user) {
      user.active = true;
      await user.save();
      console.log('User updated successfully.');
    } else {
      console.log('User not found.');
      // Handle if the user is not found
    }
    return NextResponse.redirect(
      process.env.NEXT_ENV === 'development'
        ? `http://localhost:3000/authenticate/${token}`
        : `https://guds.world/authenticate/${token}`
    );
  } catch (error) {
    console.log('Token is not created', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
