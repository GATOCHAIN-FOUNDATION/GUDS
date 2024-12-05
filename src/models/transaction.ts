import mongoose, { Schema, model, models } from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    transaction_id: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Transaction =
  models.Transaction || mongoose.model('Transaction', transactionSchema);

export default Transaction;
