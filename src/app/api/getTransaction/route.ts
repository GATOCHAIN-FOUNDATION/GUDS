import { connectMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import Transaction from '@/models/transaction';
export async function GET(req: any) {
  try {
    await connectMongoDB();
    const transaction = await Transaction.find();
    return NextResponse.json({ transaction });
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while getting the transaction.' },
      { status: 500 }
    );
  }
}
