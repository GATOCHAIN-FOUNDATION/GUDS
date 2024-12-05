import { Resend } from 'resend';

export const sendVerificationEmail = async (
  email: any,
  verificationCode: any
) => {
  try {
    const resend = new Resend('re_J4gkajqr_2wbE66vmwDzxA2ia4kMYz2Sc');

    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ssameershah1200@gmail.com',
      subject: 'Email Verficiation',
      html: `<p>Your email ${email} verification code is <strong>l${verificationCode}</strong>!</p>`,
    });
  } catch (error) {
    console.log(error);
  }
};
