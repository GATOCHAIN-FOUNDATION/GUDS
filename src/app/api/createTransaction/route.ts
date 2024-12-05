import { connectMongoDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import Transaction from '@/models/transaction';
export async function POST(req: any) {
  try {
    const { id, email, status, amount, address } = await req.json();
    await connectMongoDB();
    const newTransaction = new Transaction({
      transaction_id: id,
      address: address,
      email: email,
      status: status,
      amount: amount,
    });
    const new_transaction = await newTransaction.save();
    return NextResponse.json(
      { message: 'Trasaction created.', new_transaction },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Trasaction created failed.' },
      { status: 500 }
    );
  }
}
