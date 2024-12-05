import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
const nodemailer = require('nodemailer');

export async function POST(req: any) {
  try {
    const { token, email } = await req.json();

    const link =
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3000/forgotpassword/${token}`
        : `https://guds.world/forgotpassword/${token}`;

    console.log('Reset password link:', link);

    await connectMongoDB(); // Ensure you are connected to MongoDB

    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find the user by email
      { passwordToken: token }, // Update the user's password token
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS_KEY,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL, // sender address
      to: email, // list of receivers
      subject: 'Password Reset', // Subject line
      text: '', // plain text body
      html: `<b>Your reset password link is <a href="${link}">${link}</a></b>`, // html body
    });

    console.log('Email sent info:', info);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json(
      { message: 'An error occurred while sending the email.' },
      { status: 500 }
    );
  }
}
