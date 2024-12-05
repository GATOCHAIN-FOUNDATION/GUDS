import { connectMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import Transaction from '@/models/transaction';

export async function POST(req: any) {
  try {
    const { transaction_id, status } = await req.json();
    await connectMongoDB();

    const updatedTransaction = await Transaction.findOneAndUpdate(
      { transaction_id }, // Find the user by email
      {
        status: status,
      }, // Use $set to update email and country
      { new: true } // Return the updated document
    );
    if (!updatedTransaction) {
      return NextResponse.json(
        { message: 'Transaction not found.' },
        { status: 404 }
      );
    }
    console.log(updatedTransaction);
    return NextResponse.json(
      { message: 'Status updated successfully.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while updating the user country.' },
      { status: 500 }
    );
  }
}
