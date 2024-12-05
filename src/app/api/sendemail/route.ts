import { NextResponse } from 'next/server';
import { render } from '@react-email/components';
import Template from '@/components/email-template/template';
var nodemailer = require('nodemailer');

export async function POST(req: any) {
  try {
    const { link, email } = await req.json();

    const emailHtml = await render(
      Template({
        link,
      })
    );

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS_KEY,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Email Verification',
      html: emailHtml,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occurred while sending email to the user.',
        error: error,
      },
      { status: 500 }
    );
  }
}
