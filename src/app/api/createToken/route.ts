import { connectMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import ActivateToken from '@/models/activatetoken';
export async function POST(req: any, res: any) {
  try {
    await connectMongoDB();
    const { uid } = await req.json();
    const newToken = new ActivateToken({
      token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
      userId: uid,
    });
    const _token = await newToken.save();

    return NextResponse.json({ _token }, { status: 201 });
  } catch (error) {
    console.log('Token is not created', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
