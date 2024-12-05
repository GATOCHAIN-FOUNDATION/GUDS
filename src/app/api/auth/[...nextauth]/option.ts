import { connectMongoDB } from '@/lib/mongodb';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import User from '@/models/user';
import redirect from 'next-auth';

interface Profile {
  email?: string;
  password?: string;
  active?: string;
}
interface A {
  provider?: string;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({
      account,
      profile,
    }: {
      account: A | null;
      profile?: Profile | undefined;
    }): Promise<boolean> {
      if (account?.provider == 'credentials') {
        return true;
      } else if (
        account?.provider == 'facebook' ||
        account?.provider == 'google'
      ) {
        try {
          await connectMongoDB();

          let userExist = await User.findOne({ email: profile?.email });

          if (!userExist) {
            const user = User.create({ email: profile?.email, active: true });
          }
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return false;
    },
    session: async ({ session }) => {
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
};
